const { Router } = require('express');
const router = Router();

const userControllers = require('../controllers/users.js')

router.get('/user', userControllers.read);
router.post('/user', userControllers.create);
router.put('/user/:id', userControllers.update);
router.delete('/user/:id', userControllers.delete);




module.exports = router;