import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormalabeurComponent } from './formation-formalabeur.component';

describe('FormationFormalabeurComponent', () => {
  let component: FormationFormalabeurComponent;
  let fixture: ComponentFixture<FormationFormalabeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFormalabeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormalabeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
