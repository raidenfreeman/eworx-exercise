import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";
import {
  BasketState,
  ProductIdQuantityPair
} from "../../../shared/store/basket.state";
import { Observable, Subscription, combineLatest } from "rxjs";
import { map, take } from "rxjs/operators";
import { ProductsState } from "../../../shared/store/products.state";
import { Product } from "../../../shared/models/products.model";
import { ProductsService } from "../../../shared/services/products/products.service";
import * as X2JS from "x2js";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(BasketState.getProductQuantityPairs)
  basketItemIds$: Observable<{ id: string; quantity: number }[]>;

  @Select(ProductsState) products$: Observable<Product[]>;

  productsAndQuantities$: Observable<{ product: Product; quantity: number }[]>;
  total$: Observable<number>;

  totalDiscounted$: Observable<number>;
  ngOnInit() {
    this.store.dispatch(new LoadProducts());

    this.productsAndQuantities$ = combineLatest(
      this.products$,
      this.basketItemIds$
    ).pipe(
      map(x => {
        const products = x["0"];
        const basketItems = x["1"];
        return basketItems.map(item => ({
          product: products.find(product => product.id === item.id),
          quantity: item.quantity
        }));
      })
    );

    this.total$ = this.productsAndQuantities$.pipe(
      map(x =>
        x.reduce(
          (accumulator, y) => accumulator + y.quantity * y.product.price,
          0
        )
      )
    );

    this.totalDiscounted$ = this.total$.pipe(map(x => x * 0.9));
  }
  purchase() {
    var x2js = new X2JS();
    //The minimum data to represent the basket are the ids and the quantities
    this.basketItemIds$
      .pipe(take(1))
      .subscribe(x => console.log(x2js.js2xml(x)));
  }
}
