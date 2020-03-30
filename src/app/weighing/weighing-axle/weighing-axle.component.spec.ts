import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingAxleComponent } from './weighing-axle.component';

describe('WeighingAxleComponent', () => {
  let component: WeighingAxleComponent;
  let fixture: ComponentFixture<WeighingAxleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighingAxleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighingAxleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
