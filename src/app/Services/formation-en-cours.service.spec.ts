import { TestBed } from '@angular/core/testing';

import { FormationEnCoursService } from './formation-en-cours.service';

describe('FormationEnCoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationEnCoursService = TestBed.get(FormationEnCoursService);
    expect(service).toBeTruthy();
  });
});
