/// <reference types="jest-extended" />

test('jest-extended works with ambient expect', () => {
  expect([1, 2]).toIncludeSameMembers([2, 1]);
})
