import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkb } from './checkb';

describe('Checkb', () => {
  let component: Checkb;
  let fixture: ComponentFixture<Checkb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
