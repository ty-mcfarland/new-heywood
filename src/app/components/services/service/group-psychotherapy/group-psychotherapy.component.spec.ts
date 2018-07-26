import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPsychotherapyComponent } from './group-psychotherapy.component';

describe('GroupPsychotherapyComponent', () => {
  let component: GroupPsychotherapyComponent;
  let fixture: ComponentFixture<GroupPsychotherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPsychotherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPsychotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
