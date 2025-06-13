import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMoney } from './pay-money';

describe('PayMoney', () => {
  let component: PayMoney;
  let fixture: ComponentFixture<PayMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayMoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
