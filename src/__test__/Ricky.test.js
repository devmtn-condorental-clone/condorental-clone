let fns = require('../utils/ricky_functions');

describe('test one'), () => {
    test('get all 6 condos'), () => {
        return fns.getAllCondos()
        .then(res => {
            expect(res.length).toBe(6)
        })
    }
}