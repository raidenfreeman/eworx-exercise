import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SnackbarManagerComponent } from "./snackbar-manager.component";
import { MatSnackBarModule } from "@angular/material";
import { ProductsState } from "../../store/products.state";
import { BasketState } from "../../store/basket.state";
import { NgxsModule } from "@ngxs/store";

describe("SnackbarManagerComponent", () => {
  let component: SnackbarManagerComponent;
  let fixture: ComponentFixture<SnackbarManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarManagerComponent],
      imports: [
        MatSnackBarModule,
        NgxsModule.forRoot([ProductsState, BasketState])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
