const isIsogram = require('./index');

test('Test Case 1: "hello" is not an isogram', () => {
  expect(isIsogram("hello")).toBe(false);
});

test('Test Case 2: "Kim" is an isogram', () => {
  expect(isIsogram("Kim")).toBe(true);
});

test('Test Case 2: "Oop" is not an isogram', () => {
    expect(isIsogram("Oop")).toBe(false);
});
  