
module.exports = {
    getCondos: (req, res, next) => {
        const db = req.app.get('db')
        db.get_condos().then( condos => {
            console.log(condos)
            res.status(200).send(condos)
        }).catch((err) => {
            console.log(err)
        })
    }
}