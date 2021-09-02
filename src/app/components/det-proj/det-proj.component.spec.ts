import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProjComponent } from './det-proj.component';

describe('DetProjComponent', () => {
  let component: DetProjComponent;
  let fixture: ComponentFixture<DetProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
