const express=require('express')
const { getNdotoData, getBobbleData } = require('./Sub.controller')
const router=express.Router()

router.post('/ndoto',getNdotoData)
router.post('/bobble', getBobbleData)


module.exports=router