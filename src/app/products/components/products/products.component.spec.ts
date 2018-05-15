import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductsComponent } from "./products.component";
import { Store, NgxsModule } from "@ngxs/store";
import { ProductsState } from "../../../shared/store/products.state";
import { BasketState } from "../../../shared/store/basket.state";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [NgxsModule.forRoot([ProductsState, BasketState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load products", () => {
    store.selectOnce(state => state.productsState).subscribe(products => {
      expect(products.length).toBeGreaterThan(0);
    });
  });
});
