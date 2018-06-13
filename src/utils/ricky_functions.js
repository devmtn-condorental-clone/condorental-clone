var axios = require('axios')

module.exports = {
    getAllCondos: () => axios.get('http://localhost:7373/api/condos').then(res => res.data).catch(err => 'error'),

    getName: () => axios.get('http://localhost:7373/api/condos').then(res => res.data[0].name).catch(err => 'error'),

    getNumber: () => axios.get('http://localhost:7373/api/condos').then(res => res.data[0].price).catch(err => 'error'),

    getCurrency: () => axios.get('http://localhost:7373/api/condos').then(res => res.data[0].currency).catch(err => 'error')
}
