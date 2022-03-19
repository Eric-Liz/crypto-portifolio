import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCurrencyModalComponent } from './new-currency-modal.component';

describe('NewCurrencyModalComponent', () => {
  let component: NewCurrencyModalComponent;
  let fixture: ComponentFixture<NewCurrencyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCurrencyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCurrencyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
