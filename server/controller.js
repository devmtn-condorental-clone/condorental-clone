
module.exports = {
    getCondos: (req, res, next) => {
        const db = req.app.get('db')
        db.get_condos().then( condos => {
            console.log(condos)
            res.status(200).send(condos)
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    
    editCondo: (req, res, next) => {
        const { name, price, currency, img } = req.body
        const { id } = req.params
        const db = req.app.get('db')
        if(req.user.is_admin){
            db.edit_condo([id, name, price, currency, img]).then(condos => {
                res.status(200).send(condos)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
        } else{
            res.status(403).send({ message: 'You are not authorized to perform that action.'})
        }
    },
    
    createCondo: (req, res, next) => {
        const db = req.app.get('db')
        const { name, price, currency, img } = req.body
        db.create_condo([name, price, currency, img]).then(condos => {
            res.status(200).send(condos)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    
    deleteCondo: (req, res, next) => {
        const db = req.app.get('db')
        const { id } = req.params
        if(req.user.is_admin){
            db.delete_condo([id]).then(condos => {
                res.status(200).send(condos)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
        }
    }
}