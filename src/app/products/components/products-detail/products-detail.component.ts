import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Product } from "../../../shared/models/products.model";
import { Store } from "@ngxs/store";
import { AddProduct } from "../../../basket/store/basket.actions";

@Component({
  selector: "app-products-detail",
  templateUrl: "./products-detail.component.html",
  styleUrls: ["./products-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: Product;
  constructor(private store: Store) {}

  ngOnInit() {}

  buy() {
    this.store.dispatch(new AddProduct(this.product.id));
  }
}
