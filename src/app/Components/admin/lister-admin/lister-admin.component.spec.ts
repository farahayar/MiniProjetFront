import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerAdminComponent } from './lister-admin.component';

describe('ListerAdminComponent', () => {
  let component: ListerAdminComponent;
  let fixture: ComponentFixture<ListerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
