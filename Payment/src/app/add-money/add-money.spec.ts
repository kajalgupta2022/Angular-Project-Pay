import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoney } from './add-money';

describe('AddMoney', () => {
  let component: AddMoney;
  let fixture: ComponentFixture<AddMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
