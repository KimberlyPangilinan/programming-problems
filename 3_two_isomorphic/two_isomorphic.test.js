const isomorph = require('./index')

test('Test Case 1: ESTATE,DUELED',() => {
    expect(isomorph('ESTATE','DUELED')).toBe(true)
})

test('Test Case 2: XXX, YYY', () => {
    expect(isomorph('XXX','YYY')).toBe(true)
})

test('Test Case 3', () => {
    expect(isomorph('XX','YYY')).toBe(false)
})

test('Test Case 4', () => {
    expect(isomorph('SEE','SAW')).toBe(false)
})


test('Test Case 5', () => {
    expect(isomorph('DISCRIMINATIVE', 'SIMPLIFICATION')).toBe(true)
})