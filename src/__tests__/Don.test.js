let fns = require('../utils/don_functions')


test('infant count should be 1', ()=>{
    //arrange act
    let result = fns.handleAddPersonInf(0)
    expect(result).toBe(1)
})

test('infant count should be 2', ()=>{
    //arrange act
    let result = fns.handleAddPersonInf(1)
    expect(result).toBe(2)
})
test('infant count should be a number', ()=>{
    //arrange act
    let result = fns.handleAddPersonInf(0)
    expect(typeof result).toBe('number')
})
test('infant count should be undefined ', ()=>{
    //arrange act
    let result = fns.handleAddPersonInf(2)
    expect(typeof result).toBe('undefined')
})
test('infant count should be undefined', ()=>{
    //arrange act
    let result = fns.handleAddPersonInf(5)
    expect(typeof result).toBe('undefined')
})