import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dth } from './dth';

describe('Dth', () => {
  let component: Dth;
  let fixture: ComponentFixture<Dth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
