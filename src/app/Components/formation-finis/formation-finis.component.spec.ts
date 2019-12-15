import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFinisComponent } from './formation-finis.component';

describe('FormationFinisComponent', () => {
  let component: FormationFinisComponent;
  let fixture: ComponentFixture<FormationFinisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFinisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
