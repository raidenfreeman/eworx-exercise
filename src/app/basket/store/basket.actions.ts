import { Product } from "../../shared/models/products.model";

// --- Basket actions----
export class AddProduct {
  static readonly type = '[Basket] Add Product';
  constructor(public readonly payload: string) {}
}

export class RemoveProduct {
  static readonly type = '[Basket] Remove Product';
  constructor(public readonly payload: string) {}
}
// export class LoadProductsSuccess {
//   static readonly type = '[Products] Load Products Success';

//   constructor(public readonly payload: Product[]) {}
// }

// export class LoadProductsFail {
//   static readonly type = '[Products] Load Products Fail';
//   constructor(public readonly payload?: any) {}
// }

