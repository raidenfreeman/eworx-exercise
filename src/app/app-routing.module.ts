import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: "basket",
    loadChildren: "./basket/basket.module#BasketModule"
  },
  {
    path: "products",
    loadChildren: "./products/products.module#ProductsModule"
  },
  { path: "", redirectTo: "products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
