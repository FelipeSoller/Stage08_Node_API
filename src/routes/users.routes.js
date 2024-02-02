const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

// function myMiddleware(request, response, next) {
//   console.log('You have pass by our middleware');

//   if(!request.body.isAdmin) {
//     return response.json({ message: 'User unauthorized' })
//   }

//   next()
// }

const usersController =  new UsersController()
const userAvatarController = new UserAvatarController()

// userRoutes.post('/', myMiddleware, usersController.create)
userRoutes.post('/', usersController.create)
userRoutes.put('/', ensureAuthenticated, usersController.update)
userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = userRoutes