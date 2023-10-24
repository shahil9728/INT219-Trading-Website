import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthdivComponent } from './sixthdiv.component';

describe('SixthdivComponent', () => {
  let component: SixthdivComponent;
  let fixture: ComponentFixture<SixthdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthdivComponent]
    });
    fixture = TestBed.createComponent(SixthdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
