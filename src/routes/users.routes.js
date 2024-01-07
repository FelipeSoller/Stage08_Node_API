const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const userRoutes = Router()

function myMiddleware(request, response, next) {
  console.log('You have pass by our middleware');

  if(!request.body.isAdmin) {
    return response.json({ message: 'User unauthorized' })
  }

  next()
}

const usersController =  new UsersController()

userRoutes.post('/', myMiddleware, usersController.create)

module.exports = userRoutes