import { TestBed } from '@angular/core/testing';

import { QuoteDetailsService } from './quote-details.service';

describe('QuoteDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteDetailsService = TestBed.get(QuoteDetailsService);
    expect(service).toBeTruthy();
  });
});
