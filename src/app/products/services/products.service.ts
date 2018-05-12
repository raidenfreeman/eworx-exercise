import { Injectable } from "@angular/core";
import { Product } from "../models/products.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  getProducts(): Observable<Product[]> {
    setTimeout(() => {
      this._subject.next([
        {
          id: "sdfga",
          imageURL: "",
          name: "Charger",
          price: 3.33
        },
        {
          id: "dg2",
          imageURL: "",
          name: "Cable",
          price: 1
        },
        {
          id: "dfh34",
          imageURL: "",
          name: "Extended Warranty",
          price: 8
        },
        {
          id: "hsdfh234",
          imageURL: "",
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
