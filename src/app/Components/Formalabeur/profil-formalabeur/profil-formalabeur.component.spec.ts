import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFormalabeurComponent } from './profil-formalabeur.component';

describe('ProfilFormalabeurComponent', () => {
  let component: ProfilFormalabeurComponent;
  let fixture: ComponentFixture<ProfilFormalabeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilFormalabeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFormalabeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
