import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialEvaluationComponent } from './initial-evaluation.component';

describe('InitialEvaluationComponent', () => {
  let component: InitialEvaluationComponent;
  let fixture: ComponentFixture<InitialEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
