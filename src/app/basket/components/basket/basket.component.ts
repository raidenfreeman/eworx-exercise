import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";
import {
  BasketState,
  ProductIdQuantityPair
} from "../../../shared/store/basket.state";
import { Observable } from "rxjs";
import { map, filter, flatMap } from "rxjs/operators";
import { ProductsState } from "../../../shared/store/products.state";
import { Product } from "../../../shared/models/products.model";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(BasketState.getProductQuantityPairs)
  basketItemIds$: Observable<{ id: string; quantity: number }[]>;
  products$: Observable<{ product: Product; quantity: number }[]>;

  products: Product[];
  gg;
  total$: Observable<number>;

  total: number;
  ngOnInit() {
    this.store.dispatch(new LoadProducts());

    this.store
      .selectOnce(x => x.productsState)
      .subscribe(x => (this.products = x));

    this.basketItemIds$.subscribe(itemArray => {
      this.gg = itemArray.map(item => ({
        product: this.products.find(x => x.id === item.id),
        quantity: item.quantity
      }));
      this.total = this.gg.reduce(
        (accumulator, y) => accumulator + y.quantity * y.product.price,
        0
      );
    });

    // this.total$ = this.products$.pipe(
    //   map(x =>
    //     x.reduce(
    //       (accumulator, y) => accumulator + y.quantity * y.product.price,
    //       0
    //     )
    //   )
    // );
  }

  purchase() {
    console.log("hello");
  }
}
