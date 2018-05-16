import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Select } from "@ngxs/store";
import { BasketState } from "../../store/basket.state";
import { Observable, combineLatest } from "rxjs";
import { ProductsState } from "../../store/products.state";
import { Product } from "../../models/products.model";
import { map, distinctUntilChanged, filter, skip } from "rxjs/operators";

@Component({
  selector: "app-snackbar-manager",
  templateUrl: "./snackbar-manager.component.html",
  styleUrls: ["./snackbar-manager.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarManagerComponent implements OnInit {
  constructor(private snackBarService: MatSnackBar) {}

  @Select(BasketState.getProductQuantityPairs)
  basketItemIds$: Observable<{ id: string; quantity: number }[]>;

  @Select(ProductsState) products$: Observable<Product[]>;

  private discount$: Observable<boolean>;
  ngOnInit() {
    this.discount$ = combineLatest(this.products$, this.basketItemIds$).pipe(
      map(x => {
        const productsArray = x["0"];
        const basketItemsArray = x["1"];
        const productsAndQuantities = basketItemsArray.map(item => ({
          product: productsArray.find(product => product.id === item.id),
          quantity: item.quantity
        })); // Inner-join the basket with the products, based on id
        const total = productsAndQuantities.reduce(
          (accumulator, y) => accumulator + y.quantity * y.product.price,
          0
        ); // sum the prices of the items, based on quantity
        return total >= 100; // return if we reached 100
      }),
      distinctUntilChanged(), // if we're already exceeding 100 don't emit
      filter(x => x) // only emit true values (thus, only when going from false to true)
    );
    const that = this;
    setTimeout(() => {
      that.discount$.subscribe(_ =>
        that.snackBarService.open("10% Discount Applied! 🎉", "Ok!", {
          duration: 2000
        })
      );
    }, 20); // This is a hack, I know, I'll go to hell.
  }
}
