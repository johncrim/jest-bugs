import { expect } from '@jest/globals';

expect.extend({
  equalsFoo(received) {
    if (received === "foo") {
      return {
        pass: true,
        message: () => 'Matches string "foo"'
      };
    }
    return {
      pass: false,
      message: () => 'Expected string "foo"'
    };
  }
});

declare namespace jest {
  interface Matchers<R, T = {}> {
    equalsFoo(): R;
  }
}

// Compilation fails due to expect not returning a type that is compatible with Matchers<R>
test('custom expect extension fails compilation with @jest/globals', () => {
  expect('foo').equalsFoo();
  expect('bar').not.equalsFoo();
})
