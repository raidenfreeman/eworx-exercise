import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";
import {
  BasketState,
  ProductIdQuantityPair
} from "../../../shared/store/basket.state";
import { Observable, Subscription } from "rxjs";
import { map, filter, flatMap, take } from "rxjs/operators";
import { ProductsState } from "../../../shared/store/products.state";
import { Product } from "../../../shared/models/products.model";
import { ProductsService } from "../../../shared/services/products/products.service";
import * as X2JS from "x2js";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(BasketState.getProductQuantityPairs)
  basketItemIds$: Observable<{ id: string; quantity: number }[]>;
  products: Product[];
  productsAndQuantities: { product: Product; quantity: number }[];
  total: number;
  subscriptions: Subscription[] = [];
  ngOnInit() {
    this.store.dispatch(new LoadProducts());

    this.subscriptions.push(
      this.store
        .selectOnce(x => x.productsState)
        .subscribe(x => (this.products = x))
    );

    this.subscriptions.push(
      this.basketItemIds$.subscribe(itemArray => {
        this.productsAndQuantities = itemArray.map(item => ({
          product: this.products.find(x => x.id === item.id),
          quantity: item.quantity
        }));
        this.total = this.productsAndQuantities.reduce(
          (accumulator, y) => accumulator + y.quantity * y.product.price,
          0
        );
      })
    );
  }
  purchase() {
    var x2js = new X2JS();
    //The minimum data to represent the basket are the ids and the quantities
    this.basketItemIds$
      .pipe(take(1))
      .subscribe(x => console.log(x2js.js2xml(x)));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
