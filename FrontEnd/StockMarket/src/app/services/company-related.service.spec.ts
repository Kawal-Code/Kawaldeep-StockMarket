import { TestBed } from '@angular/core/testing';

import { CompanyRelatedService } from './company-related.service';

describe('CompanyRelatedService', () => {
  let service: CompanyRelatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRelatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
