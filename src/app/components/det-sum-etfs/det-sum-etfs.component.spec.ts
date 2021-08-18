import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetSumEtfsComponent } from './det-sum-etfs.component';

describe('DetSumEtfsComponent', () => {
  let component: DetSumEtfsComponent;
  let fixture: ComponentFixture<DetSumEtfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetSumEtfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetSumEtfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
