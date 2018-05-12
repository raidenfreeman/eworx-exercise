import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";

const ROUTES: Route[] = [
  {
    path: "",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
