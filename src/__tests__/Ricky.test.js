let fns = require('../utils/ricky_functions');
const getType = require('jest-get-type');

describe('test one', () => {
    test('check for condos', () => {
        return fns.getAllCondos()
        .then(res => {
            expect(res.length).toBeGreaterThan(0)
        })
    })
})

describe('test two', () => {
    test('condos name should be string', () => {
        return fns.getName()
        .then(res => {
            console.log(getType(res))
            expect(getType(res)).toBe('string')
        })
    })
})

describe('test three', () => {
    test('condos price should be number', () => {
        return fns.getNumber()
        .then(res => {
            console.log(getType(res))
            expect(getType(res)).toBe('number')
        })
    })
})

describe('test four', () => {
    test('condos currency should be uppercase', () => {
        return fns.getCurrency()
        .then(res => {
            let bool = true
            for(let i = 0; i < res.length; i++){
                if(res.charCodeAt(i) > 90){
                    bool = false
                }
            }
            expect(bool).toBe(true)
        })
    })
})

describe('test five', () => {
    test('currency length should not be greater than 3', () => {
        return fns.getCurrency()
        .then(res => {
            expect(res.length).toBeLessThanOrEqual(3)
        })
    })
})




