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

// Compilation can be skipped via casting; then the custom matcher fn works at runtime
test('custom expect extension works with PITA casts', () => {
  (expect('foo') as any).equalsFoo();
  (expect('bar').not as unknown as jest.Matchers<void, string>).equalsFoo();
})
