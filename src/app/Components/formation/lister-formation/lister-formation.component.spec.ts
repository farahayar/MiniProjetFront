import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFormationComponent } from './lister-formation.component';

describe('ListerFormationComponent', () => {
  let component: ListerFormationComponent;
  let fixture: ComponentFixture<ListerFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
