import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploresectionComponent } from './exploresection.component';

describe('ExploresectionComponent', () => {
  let component: ExploresectionComponent;
  let fixture: ComponentFixture<ExploresectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploresectionComponent]
    });
    fixture = TestBed.createComponent(ExploresectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
