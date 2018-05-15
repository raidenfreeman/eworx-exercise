import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Product } from "../../../shared/models/products.model";
import { Store } from "@ngxs/store";
import { RemoveProduct, AddProduct } from "../../store/basket.actions";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent {
  @Input() product: Product;

  removeOne() {
    this.store.dispatch(new RemoveProduct(this.product.id));
  }

  addOne() {
    this.store.dispatch(new AddProduct(this.product.id));
  }
  constructor(private store: Store) {}
}
