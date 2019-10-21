import { TestBed } from '@angular/core/testing';

import { ConecRestService } from './conec-rest.service';

describe('ConecRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConecRestService = TestBed.get(ConecRestService);
    expect(service).toBeTruthy();
  });
});
