import { TestBed } from '@angular/core/testing';

import { ConecPantherService } from './conec-panther.service';

describe('ConecPantherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConecPantherService = TestBed.get(ConecPantherService);
    expect(service).toBeTruthy();
  });
});
