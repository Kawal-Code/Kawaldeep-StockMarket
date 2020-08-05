import { TestBed } from '@angular/core/testing';

import { ViewipoService } from './viewipo.service';

describe('ViewipoService', () => {
  let service: ViewipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
