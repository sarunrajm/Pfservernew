const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')
const multerConfig = require('../Middlewares/multerMiddleware')


// register API
router.post('/user/register',userController.register)
// login API

router.post('/user/login',userController.login)
// addprojects
router.post('/project/add',jwtMiddleWare,multerConfig.single("projectImage"),projectController.addProjects)
//getUserproject
router.get('/user/all-projects',jwtMiddleWare,projectController.allUserProjects) 
//getAllproject
router.get('/projects/all',jwtMiddleWare,projectController.getAllProjects) 
//getHomeproject
router.get('/projects/home-projects',projectController.getHomeProjects) 

// export router
module.exports = router