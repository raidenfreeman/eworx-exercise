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

export interface ProductsStateModel {
  products: Product[];
  loaded: boolean;
  loading: boolean;
}

@State<ProductsStateModel>({
  name: "productsState",
  defaults: {
    products: [],
    loaded: false,
    loading: false
  }
})
export class ProductsState {
  constructor(private productsService: ProductsService) {}

  @Selector()
  static products(state: ProductsStateModel): Product[] {
    return state.products;
  }
  // load Products
  @Action(LoadProducts)
  loadProducts({ patchState, dispatch }: StateContext<ProductsStateModel>) {
    patchState({ loading: true });
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
    { patchState }: StateContext<ProductsStateModel>,
    action: LoadProductsSuccess
  ) {
    patchState({
      products: action.payload,
      loaded: true,
      loading: false
    });
  }

  @Action(LoadProductsFail)
  loadProductsFail({ patchState }: StateContext<ProductsStateModel>) {
    patchState({ loading: false, loaded: false });
  }
}
