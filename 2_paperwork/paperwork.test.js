const paperwork = require('./index');

test('Test Case 1: 5,5 = 25', () => {
    expect(paperwork(5, 5)).toBe(25);
});
test('Test Case 2: 5,0 = 0', () => {
    expect(paperwork(5, 0)).toBe(0);
});
test('Test Case 2: 0,0 = 0', () => {
    expect(paperwork(0, 0)).toBe(0);
});
test('Test Case 2: 0,5 = 0', () => {
    expect(paperwork(0, 5)).toBe(0);
});
test('Test Case 2: 5,-5 = 0', () => {
    expect(paperwork(5, -5)).toBe(0);
});
test('Test Case 2: -5,-5 = 0', () => {
    expect(paperwork(-5, -5)).toBe(0);
});
test('Test Case 2: -5,5 = 0', () => {
    expect(paperwork(-5, 5)).toBe(0);
});