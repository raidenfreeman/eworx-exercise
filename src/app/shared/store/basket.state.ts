import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Product } from "../models/products.model";
import { AddProduct } from "../../basket/store/basket.actions";

export interface ProductIdQuantityPair {
  [id: string]: number;
}

@State<ProductIdQuantityPair>({
  name: "basketState",
  defaults: {}
})
export class BasketState {
  constructor() {}

  @Selector()
  static getProductQuantityPairs(
    state: ProductIdQuantityPair
  ): { id: string; quantity: number }[] {
    return Object.keys(state).map(id => ({ id, quantity: state[id] }));
  }

  @Action(AddProduct)
  addProduct(context: StateContext<ProductIdQuantityPair>, action: AddProduct) {
    const g = context.getState();
    const id = action.payload;
    g[id] = g[id] + 1 || 1;
    context.setState(g);
  }
}
