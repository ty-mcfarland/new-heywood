import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPsychotherapyComponent } from './individual-psychotherapy.component';

describe('IndividualPsychotherapyComponent', () => {
  let component: IndividualPsychotherapyComponent;
  let fixture: ComponentFixture<IndividualPsychotherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualPsychotherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPsychotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
