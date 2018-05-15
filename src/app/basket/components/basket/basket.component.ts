import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";
import { AddProduct } from "../../store/basket.actions";
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

  total$: Observable<number>;
  ngOnInit() {
    this.store.dispatch(new LoadProducts());

    this.products$ = this.basketItemIds$.pipe(
      flatMap(x =>
        this.store.select(state => {
          const productsInBasket = state.productsState.filter(product =>
            x.some(y => y.id === product.id)
          );
          return productsInBasket.map(y => ({
            product: y,
            quantity: x.find(z => z.id === y.id).quantity
          }));
        })
      )
    );

    this.total$ = this.products$.pipe(
      map(x =>
        x.reduce(
          (accumulator, y) => accumulator + y.quantity * y.product.price,
          0
        )
      )
    );
  }
}
