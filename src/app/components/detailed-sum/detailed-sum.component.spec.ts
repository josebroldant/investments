import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSumComponent } from './detailed-sum.component';

describe('DetailedSumComponent', () => {
  let component: DetailedSumComponent;
  let fixture: ComponentFixture<DetailedSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
