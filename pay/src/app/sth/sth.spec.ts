import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sth } from './sth';

describe('Sth', () => {
  let component: Sth;
  let fixture: ComponentFixture<Sth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
