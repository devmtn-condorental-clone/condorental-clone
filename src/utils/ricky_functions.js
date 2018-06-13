var axios = require('axios')

module.exports = {
    getAllCondos: () => axios.get('http://localhost:7373/api/condos').then(res => res.data).catch(err => 'error')
}