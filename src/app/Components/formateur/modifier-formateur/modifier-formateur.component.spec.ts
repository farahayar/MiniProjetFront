import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormateurComponent } from './modifier-formateur.component';

describe('ModifierFormateurComponent', () => {
  let component: ModifierFormateurComponent;
  let fixture: ComponentFixture<ModifierFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
