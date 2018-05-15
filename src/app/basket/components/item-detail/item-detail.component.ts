import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../shared/models/products.model";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrls: ["./item-detail.component.css"]
})
export class ItemDetailComponent implements OnInit {
  @Input() product: Product;
  constructor() {}
  ngOnInit() {}
}
