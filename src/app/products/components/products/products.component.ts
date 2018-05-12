import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Product } from "../../models/products.model";
import { Store } from "@ngxs/store";
import { LoadProducts } from "../../store/products.actions";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];

  addProduct(product: Product) {
    console.log("added " + product.name);
  }
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }
}
