/// <reference types="jest-extended" />

test('array contents are equivalent', () => {
  expect([1, 2]).toIncludeSameMembers([2, 1]);
})
