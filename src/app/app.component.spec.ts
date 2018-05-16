import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { SnackbarManagerComponent } from "./shared/components/snackbar-manager/snackbar-manager.component";
import { BasketState } from "./shared/store/basket.state";
import { ProductsState } from "./shared/store/products.state";
import { NgxsModule } from "@ngxs/store";
import { MatSnackBarModule } from "@angular/material";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([BasketState, ProductsState]),
        MatSnackBarModule
      ],
      declarations: [AppComponent, SnackbarManagerComponent]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
