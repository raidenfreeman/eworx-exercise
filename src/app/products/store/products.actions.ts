import { Product } from "../models/products.model";

// --- Product actions----
export class LoadProducts {
  static readonly type = '[Products] Load Products';
}

export class LoadProductsSuccess {
  static readonly type = '[Products] Load Products Success';

  constructor(public readonly payload: Product[]) {}
}

export class LoadProductsFail {
  static readonly type = '[Products] Load Products Fail';
  constructor(public readonly payload?: any) {}
}
