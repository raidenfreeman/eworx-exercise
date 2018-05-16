import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Product } from "../../../shared/models/products.model";
import { Store } from "@ngxs/store";
import { AddProduct } from "../../../basket/store/basket.actions";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-products-detail",
  templateUrl: "./products-detail.component.html",
  styleUrls: ["./products-detail.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: Product;
  constructor(private store: Store, private snackbar: MatSnackBar) {}

  ngOnInit() {}

  buy() {
    this.snackbar.open(`Added ${this.product.name} to the basket!`, "Ok", {
      duration: 2000,
      verticalPosition: "top"
    }); // Race condition with the other snackbar, because angular material's service doesn't queue them -_-
    this.store.dispatch(new AddProduct(this.product.id));
  }
}
