import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/shared/models/products.model";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  getProducts(): Observable<Product[]> {
    setTimeout(() => {
      this._subject.next([
        {
          id: "sdfga",
          imageURL: "assets/images/charger.jpg",
          name: "Charger",
          price: 10.33
        },
        {
          id: "dg2",
          imageURL: "assets/images/cable.jpg",
          name: "Cable",
          price: 1
        },
        {
          id: "dfh34",
          imageURL: "assets/images/warranty.png",
          name: "Extended Warranty",
          price: 25.28
        },
        {
          id: "hsdfh234",
          imageURL: "assets/images/pebble.jpg",
          name: "Smart Watch",
          price: 80
        }
      ]);
    }, 50);
    return this._subject;
  }

  private _subject: Subject<Product[]>;
  constructor() {
    this._subject = new Subject<Product[]>();
  }
}
