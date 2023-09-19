import { TestBed } from '@angular/core/testing';

import { FootballResolverService } from './football-resolver.service';

describe('FootballResolverService', () => {
  let service: FootballResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
