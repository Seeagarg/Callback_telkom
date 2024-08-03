const { pool,pool2 } = require('../../db');
const { getDateFromDaysAgo } = require('../getdatefunction'); 



module.exports = {
    fetchCallbackData: (req, callback) => {
        try {
            const daysAgo = parseInt(req.query.date || '0', 10);
            console.log(daysAgo,"daysago=============")
            const queryDate = getDateFromDaysAgo(daysAgo);
            console.log(queryDate,"queryfdate==========")

            const query = process.env.CALLBACK_DETAILS;
            pool.query(query, [queryDate, queryDate, queryDate, queryDate], (err, result) => {
                if (err) {
                    console.log(err, "error");
                    return callback(err, null);
                }
                console.log(result, "=======");
                return callback(null, result);
            });
        } catch (error) {
            console.log(error.message);
            return callback(error, null);
        }
    },
    fetchBobbleCallbackData:(req,callback)=>{
        try {
            const daysAgo = parseInt(req.query.date || '0', 10);
            console.log(daysAgo,"daysago=============")
            const queryDate = getDateFromDaysAgo(daysAgo);
            console.log(queryDate,"queryfdate==========")

            const query = process.env.BOBBLE_QUERY;
            pool2.query(query, [queryDate, queryDate, queryDate, queryDate], (err, result) => {
                if (err) {
                    console.log(err, "error");
                    return callback(err, null);
                }
                console.log(result, "=======");
                return callback(null, result);
            });
        } catch (error) {
            console.log(error.message);
            return callback(error, null);
        }
    }

};



