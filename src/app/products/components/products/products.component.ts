import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { LoadProducts } from "../../store/products.actions";
import { Product } from "../../../shared/models/products.model";
import { ProductsState } from "../../../shared/store/products.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  @Select(ProductsState) products$: Observable<Product[]>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }
}
