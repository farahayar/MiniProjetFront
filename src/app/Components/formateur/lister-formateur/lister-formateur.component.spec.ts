import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFormateurComponent } from './lister-formateur.component';

describe('ListerFormateurComponent', () => {
  let component: ListerFormateurComponent;
  let fixture: ComponentFixture<ListerFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
