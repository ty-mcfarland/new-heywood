import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipTherapyComponent } from './relationship-therapy.component';

describe('RelationshipTherapyComponent', () => {
  let component: RelationshipTherapyComponent;
  let fixture: ComponentFixture<RelationshipTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
