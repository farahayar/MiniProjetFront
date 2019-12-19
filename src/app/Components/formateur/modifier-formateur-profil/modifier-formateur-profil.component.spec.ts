import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormateurProfilComponent } from './modifier-formateur-profil.component';

describe('ModifierFormateurProfilComponent', () => {
  let component: ModifierFormateurProfilComponent;
  let fixture: ComponentFixture<ModifierFormateurProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFormateurProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFormateurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
