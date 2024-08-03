const { fetchBobbleData, fetchNdotoData } = require("./Sub.service");

module.exports={
    getNdotoData:(req,res)=>{
        const {day} = req.query;
        console.log(day)
        fetchNdotoData(day,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error:err,message:"INTERNAL SERVER ERROR!!"})
            }
            else{
                return res.json({result:result})
            }
        })
    },
    getBobbleData:(req,res)=>{
        const {day} = req.query;
        console.log(day)
        fetchBobbleData(day,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({error:err,message:"INTERNAL SERVER ERROR!!"})
            }
            else{
                return  res.json({result:result})
            }
        })
    }
}