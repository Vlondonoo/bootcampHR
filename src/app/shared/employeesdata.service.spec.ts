import { TestBed } from '@angular/core/testing';

import { EmployeesdataService } from './employeesdata.service';

describe('EmployeesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesdataService = TestBed.get(EmployeesdataService);
    expect(service).toBeTruthy();
  });
});
