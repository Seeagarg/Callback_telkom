const { fetchCallbackData, fetchBobbleCallbackData } = require("./apiRouter.services")

module.exports={
    fetchdata:(req,res)=>{
        fetchCallbackData(req,(err,result)=>{
            if(err){
                console.log(err,"error fetching data")
                res.status(400).json({error:err})
              }
              console.log(result,"result---------")
              res.send({message:result})
            
        })
       
    },
    getBobbleData:(req,res)=>{
        fetchBobbleCallbackData(req,(err,result)=>{
            if(err){
                console.log(err,"error fetching data")
                res.status(400).json({error:err})
              }
              console.log(result,"result---------")
              res.send({message:result})
            
        })
},
}




