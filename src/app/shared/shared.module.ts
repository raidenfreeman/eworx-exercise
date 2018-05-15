import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { ProductsState } from "./store/products.state";
import { BasketState } from "./store/basket.state";
import { SnackbarManagerComponent } from "./components/snackbar-manager/snackbar-manager.component";
import { MatSnackBarModule } from "@angular/material";
@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [SnackbarManagerComponent],
  exports: [CommonModule, SnackbarManagerComponent]
})
export class SharedModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
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
