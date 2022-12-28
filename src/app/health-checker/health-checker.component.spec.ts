import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckerComponent } from './health-checker.component';

describe('HealthCheckerComponent', () => {
  let component: HealthCheckerComponent;
  let fixture: ComponentFixture<HealthCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
