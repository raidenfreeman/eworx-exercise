import { Action, Selector, State, StateContext } from "@ngxs/store";
import { asapScheduler, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Product } from "../models/products.model";
import {
  LoadProducts,
  LoadProductsFail,
  LoadProductsSuccess
} from "../../products/store/products.actions";
import { ProductsService } from "../services/products/products.service";

@State<Product[]>({
  name: "productsState",
  defaults: []
})
export class ProductsState {
  constructor(private productsService: ProductsService) {}

  @Selector()
  static products(state: Product[]): Product[] {
    return state;
  }
  // load Products
  @Action(LoadProducts)
  loadProducts({ dispatch }: StateContext<Product[]>) {
    return this.productsService.getProducts().pipe(
      map((Products: Product[]) => {
        asapScheduler.schedule(() =>
          dispatch(new LoadProductsSuccess(Products))
        );
      }),
      catchError(err =>
        of(asapScheduler.schedule(() => dispatch(new LoadProductsFail())))
      )
    );
  }

  @Action(LoadProductsSuccess)
  loadProductSuccess(
    { setState }: StateContext<Product[]>,
    action: LoadProductsSuccess
  ) {
    setState(action.payload);
  }

  // @Action(LoadProductsFail)
  // loadProductsFail({ patchState }: StateContext<Product[]>) {
  //   patchState({ loading: false, loaded: false });
  // }
}
