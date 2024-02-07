const express = require('express')
const path = require("path")
const router = express.Router()
const controllers = require("../app/controllers")
const validator = require("../app/validators")
const UserController = controllers.api.v1.UserController
const ProductController = controllers.api.v1.ProductController

// user router
router.post('/api/user/register', validator.validate(validator.userValidator.registerRules), UserController.register)
router.post('/api/user/login', validator.validate(validator.userValidator.loginRules), UserController.login)
router.put('/api/user/update/:id', validator.validate(validator.userValidator.updateRules), UserController.update)
router.delete('/api/user/delete/:id', UserController.destroy)

// product router
router.post('/api/product/create', validator.validate(validator.productValidator.createRules), ProductController.create)
router.get('/api/product/list', ProductController.list)
router.get('/api/product/findOne/:id', ProductController.find)
router.put('/api/product/update/:id', validator.validate(validator.productValidator.updateRules), ProductController.update)
router.delete('/api/product/delete/:id', ProductController.destroy)

module.exports = router