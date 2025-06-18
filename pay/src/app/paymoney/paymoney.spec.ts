import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymoney } from './paymoney';

describe('Paymoney', () => {
  let component: Paymoney;
  let fixture: ComponentFixture<Paymoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paymoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paymoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
