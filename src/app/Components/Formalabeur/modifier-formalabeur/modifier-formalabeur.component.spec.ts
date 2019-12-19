import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormalabeurComponent } from './modifier-formalabeur.component';

describe('ModifierFormalabeurComponent', () => {
  let component: ModifierFormalabeurComponent;
  let fixture: ComponentFixture<ModifierFormalabeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFormalabeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFormalabeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
