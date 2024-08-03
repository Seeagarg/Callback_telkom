const { pool,pool2 } = require("../../db")

module.exports={
    fetchNdotoData:(day,callback)=>{
        const fetch_callback = process.env.NDOTO_SUB_CALLBACK
        console.log(day)
        pool.query(fetch_callback,[day],(err,result)=>{
            if(err){
                return callback(err);
            }
            else{
                console.log(result)
                return callback('',result);
            }
        })
    },
    fetchBobbleData:(day,callback)=>{
        const fetch_callback = process.env.BOBBLE_SUB_CALLBACK
        pool2.query(fetch_callback,[day],(err,result)=>{
            if(err){
                return callback(err);
            }
            else{
                return callback('',result)
            }
        })
    }
}