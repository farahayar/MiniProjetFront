import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFormateurComponent } from './consulter-formateur.component';

describe('ConsulterFormateurComponent', () => {
  let component: ConsulterFormateurComponent;
  let fixture: ComponentFixture<ConsulterFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
