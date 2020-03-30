import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingDetailComponent } from './weighing-detail.component';

describe('WeighingDetailComponent', () => {
  let component: WeighingDetailComponent;
  let fixture: ComponentFixture<WeighingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
