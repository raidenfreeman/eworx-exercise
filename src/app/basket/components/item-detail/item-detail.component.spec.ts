import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemDetailComponent } from "./item-detail.component";
import { BasketState } from "../../../shared/store/basket.state";
import { NgxsModule } from "@ngxs/store";
import { ProductsState } from "../../../shared/store/products.state";

describe("ItemDetailComponent", () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailComponent],
      imports: [NgxsModule.forRoot([ProductsState, BasketState])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
