import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedivComponent } from './coursediv.component';

describe('CoursedivComponent', () => {
  let component: CoursedivComponent;
  let fixture: ComponentFixture<CoursedivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursedivComponent]
    });
    fixture = TestBed.createComponent(CoursedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
