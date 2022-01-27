
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

test('custom expect extension works using ambient expect', () => {
  expect('foo').equalsFoo();
  expect('bar').not.equalsFoo();
})
