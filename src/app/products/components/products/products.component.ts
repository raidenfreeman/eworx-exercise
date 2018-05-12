import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Store } from "@ngxs/store";
import { LoadProducts } from "../../store/products.actions";
import { Product } from "../../../shared/models/products.model";

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
    console.log('init ProdComponent');
  }
}
