const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
//router.put('/update-user/:id', userController.updateUser)
router.put('/change-password/:userId', userController.changePassword)
router.put('/update-user/:id', authUserMiddleWare, userController.updateUser)
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)
router.get('/getAll', authMiddleWare, userController.getAllUser)
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)
router.post('/delete-many', authMiddleWare, userController.deleteMany)

router.post("/cart-user/:id", authUserMiddleWare, userController.createUserCart);
router.get("/get-cart-user/:id", userController.getUserCart);
router.put("/update-cart-user/:id/:idProduct", authUserMiddleWare, userController.updateUserCart);
router.delete("/delete-cart-user/:id/:idProduct", authUserMiddleWare, userController.deleteProductUserCart);
router.delete("/delete-all-cart-user/:id", authUserMiddleWare, userController.deleteAllProductInCart);
router.get('/orders/:userId', userController.getOrderHistory);

module.exports = router