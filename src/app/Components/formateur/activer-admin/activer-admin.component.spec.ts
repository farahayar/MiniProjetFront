import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverAdminComponent } from './activer-admin.component';

describe('ActiverAdminComponent', () => {
  let component: ActiverAdminComponent;
  let fixture: ComponentFixture<ActiverAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiverAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
