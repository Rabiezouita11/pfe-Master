import { TestBed } from '@angular/core/testing';

import { GuardAgricultureAdminGuard } from './guard-agriculture-admin.guard';

describe('GuardAgricultureAdminGuard', () => {
  let guard: GuardAgricultureAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAgricultureAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
