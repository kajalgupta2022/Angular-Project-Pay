import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri } from './tri';

describe('Tri', () => {
  let component: Tri;
  let fixture: ComponentFixture<Tri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tri);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
