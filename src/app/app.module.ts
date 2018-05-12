import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Route, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/components/products/products.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

export const ROUTES: Route[] = [
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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    RouterModule.forRoot(ROUTES),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
