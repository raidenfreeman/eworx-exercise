import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"]
})
export class BasketComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }
}
