import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumEtfsComponent } from './sum-etfs.component';

describe('SumEtfsComponent', () => {
  let component: SumEtfsComponent;
  let fixture: ComponentFixture<SumEtfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumEtfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumEtfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
