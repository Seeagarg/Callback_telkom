const express=require('express')
const { fetchdata, getBobbleData } = require('./apiRouter.controller')
const router=express.Router()

router.post('/ndoto',fetchdata)
router.post('/bobble', getBobbleData)


module.exports=router
