import { TestBed } from '@angular/core/testing';

import { UpdateipoService } from './updateipo.service';

describe('UpdateipoService', () => {
  let service: UpdateipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
