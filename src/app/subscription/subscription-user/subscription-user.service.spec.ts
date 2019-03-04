import { TestBed } from '@angular/core/testing';

import { SubscriptionUserService } from './subscription-user.service';

describe('SubscriptionUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionUserService = TestBed.get(SubscriptionUserService);
    expect(service).toBeTruthy();
  });
});
