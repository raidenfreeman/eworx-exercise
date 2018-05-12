import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { LoadProducts } from "../../../products/store/products.actions";
import { AddProduct } from "../../store/basket.actions";

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

  add(s: string = this.makeid()) {
    this.store.dispatch(new AddProduct(s));
  }
  makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
