import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomateurProfilComponent } from './fomateur-profil.component';

describe('FomateurProfilComponent', () => {
  let component: FomateurProfilComponent;
  let fixture: ComponentFixture<FomateurProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomateurProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomateurProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
