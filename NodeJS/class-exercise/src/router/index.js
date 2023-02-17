const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) =>{
    res.send('teste home');
})

router.post('/usuario', controllers.create)


module.exports = router