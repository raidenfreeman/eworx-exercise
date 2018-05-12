import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasketComponent } from "./components/basket/basket.component";
import { RouterModule, Route } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

const ROUTES: Route[] = [
  {
    path: "",
    component: BasketComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxsModule.forFeature([])
  ],
  declarations: [BasketComponent]
})
export class BasketModule {}
