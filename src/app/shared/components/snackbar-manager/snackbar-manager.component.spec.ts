import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarManagerComponent } from './snackbar-manager.component';

describe('SnackbarManagerComponent', () => {
  let component: SnackbarManagerComponent;
  let fixture: ComponentFixture<SnackbarManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
