import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriFormalabeurComponent } from './inscri-formalabeur.component';

describe('InscriFormalabeurComponent', () => {
  let component: InscriFormalabeurComponent;
  let fixture: ComponentFixture<InscriFormalabeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriFormalabeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriFormalabeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
