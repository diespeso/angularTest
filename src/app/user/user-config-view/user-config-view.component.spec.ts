import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigViewComponent } from './user-config-view.component';

describe('UserConfigViewComponent', () => {
  let component: UserConfigViewComponent;
  let fixture: ComponentFixture<UserConfigViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfigViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
