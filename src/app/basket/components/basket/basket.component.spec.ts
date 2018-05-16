import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BasketComponent } from "./basket.component";
import { ItemDetailComponent } from "../item-detail/item-detail.component";
import { NgxsModule } from "@ngxs/store";
import { BasketState } from "../../../shared/store/basket.state";

describe("BasketComponent", () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasketComponent, ItemDetailComponent],
      imports: [NgxsModule.forRoot([BasketState])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
