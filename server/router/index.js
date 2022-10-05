const Router = require('express').Router;
const userController = require('../controllers/user.controller')
const favouriteController = require('../controllers/favourite.controller')

const router = new Router();

const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')
router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

router.get('/users', authMiddleware, userController.getUsers)

router.get('/favourites', favouriteController.getAll)
router.get('/favourite', favouriteController.toggle)

module.exports = router;
