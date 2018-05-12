import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { ProductsState } from "./store/products.state";
import { BasketState } from "./store/basket.state";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule]
})
export class SharedModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    console.log("SharedModule.forRoot");
    return {
      ngModule: RootSharedModule
    };
  }
}

/**
 * Special module that is only used when calling forRoot()
 */
@NgModule({
  imports: [
    NgxsModule.forFeature([ProductsState, BasketState]),
    // import so that the module calling forRoot() gets hold of all the stuff too.
    SharedModule
  ],
  exports: [SharedModule]
})
export class RootSharedModule {
  constructor() {}
}
