import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductsDetailComponent } from "./products-detail.component";
import { NgxsModule } from "@ngxs/store";
import { MatSnackBarModule } from "@angular/material";

describe("ProductsDetailComponent", () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailComponent],
      imports: [NgxsModule.forRoot([]), MatSnackBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
