import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatService);
  });
});

