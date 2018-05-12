import { Action, Selector, State, StateContext } from "@ngxs/store";
import { asapScheduler, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Product } from "../models/products.model";
import { AddProduct } from "../../basket/store/basket.actions";

export interface ProductIdQuantityPair {
  id: string;
  quantity: number;
}
export interface BasketStateModel {
  productQuantities: any; //ProductIdQuantityPair[];
}

@State<BasketStateModel>({
  name: "basketState"
})
export class BasketState {
  constructor() {}

  @Selector()
  static products(state: BasketStateModel): ProductIdQuantityPair[] {
    return state.productQuantities;
  }

  @Action(AddProduct)
  addProduct(context: StateContext<BasketStateModel>, action: AddProduct) {
    const g = context.getState();
    const id = action.payload;
    g[id] = g[id] + 1 || 1;
    context.setState(g);
  }
}
