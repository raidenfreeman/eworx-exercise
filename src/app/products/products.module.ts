import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

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
  declarations: [ProductsComponent, ProductsDetailComponent]
})
export class ProductsModule {}
