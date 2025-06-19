import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pnf } from './pnf';

describe('Pnf', () => {
  let component: Pnf;
  let fixture: ComponentFixture<Pnf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pnf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pnf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
