const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')




router.get('/', (req, res) => {
    res.send('class 04 - Controllers');
})

router.post('/user', controllers.create);
// router.get('/user', controllers.);

module.exports = router;