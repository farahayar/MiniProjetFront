import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationEnCoursComponent } from './formation-en-cours.component';

describe('FormationEnCoursComponent', () => {
  let component: FormationEnCoursComponent;
  let fixture: ComponentFixture<FormationEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
