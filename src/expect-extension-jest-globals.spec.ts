import { expect } from '@jest/globals';

/// <reference types="jest-extended" />

test('test file does not compile using @jest/globals and jest-extended', () => {
  expect([1, 2]).toIncludeSameMembers([2, 1]);
})
