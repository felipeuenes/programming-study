const { Router } = require('express');
const router = Router();

const userControllers = require('../controllers/users.js')
const authMiddleware = require('../middlewares/auth')
const prisma = require('../database')




router.get('/user', userControllers.read);
router.post('/user', userControllers.create);
router.put('/user/:id', userControllers.update);
router.delete('/user/:id', userControllers.delete);


const loginControllers = require('../controllers/auth');
router.post('/login', loginControllers.auth);

router.get('/system', authMiddleware, async (req, res) => {
    const id = req.userID;
    const user = await prisma.users.findUnique({where: {id: Number(id)}});
    console.log(id);
    res.json({
        system: true,
        id,
        email: user.email,
        status: "autorizado"
    })
})


module.exports = router;