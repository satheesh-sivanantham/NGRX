import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterOutputComponent } from './couter-output.component';

describe('CouterOutputComponent', () => {
  let component: CouterOutputComponent;
  let fixture: ComponentFixture<CouterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouterOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
