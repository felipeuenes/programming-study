const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.get('/', (req, res) =>{
    res.send('teste home');
})

router.post('/usuario', controllers.create)
router.delete('/delete/:id', controllers.delete)
router.put('/update', controllers.update)


module.exports = router