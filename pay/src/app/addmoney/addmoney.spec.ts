import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Addmoney} from './addmoney';
describe('Addmoney', () => {
  let component: Addmoney;
  let fixture: ComponentFixture<Addmoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[Addmoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
