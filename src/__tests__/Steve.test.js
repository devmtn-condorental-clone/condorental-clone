let fns = require('../utils/steve_functions');

describe('jest tests for Steve', () => {
    test('Currency length should equal 3', () => {
        let test = fns.validateCurrencyLength('EUR')
        expect(test).toBe(true)
    })
    test('Currency length TOO LONG', () => {
        let test = fns.validateCurrencyLength('THISISCLEARLYTOOLONG')
        expect(test).toBe(false)
    })
    test('Currency length TOO SHORT', () => {
        let test = fns.validateCurrencyLength('TS')
        expect(test).toBe(false)
    })
    test('Currency letter should be capitalized', () => {
        let test = fns.validateCurrencyCaps('EUR')
        expect(test).toBe(true)
    })
    test('Currency letters NOT capitalized', () => {
        let test = fns.validateCurrencyCaps('eur')
        expect(test).toBe(false)
    })
    test('Check valid url for image', () => {
        let test = fns.validateImgUrl('https://pinetreeclone.stevecodes.com/#/')
        expect(test).toBe(true)
    })
    test('Check INVALID url for image with spaces and other words', () => {
        let test = fns.validateImgUrl('https://pinetreeclone.stevecodes.com/#/ and then there is this')
        expect(test).toBe(false)
    })
    test('Check INVALID double url for image', () => {
        let test = fns.validateImgUrl('https://pinetreeclone.stevecodes.com/#/ https://pinetreeclone.stevecodes.com/#/')
        expect(test).toBe(false)
    })
    test('Check valid name length', () => {
        let test = fns.validateNameLength('This Should be a Valid Name')
        expect(test).toBe(true)
    })
    test('Check INALID name length', () => {
        let test = fns.validateNameLength('This is Quite Possibly the Longest Name for a Listed Condo in the History of Man and Should never be Named Like This Again')
        expect(test).toBe(false)
    })
})