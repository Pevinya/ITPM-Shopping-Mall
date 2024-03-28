const jwt = require("jsonwebtoken")
module.exports = function(req, res , next){
    try {
        const token = req.headers.authorization.split(" ")[1];      //getting the token
        const decoded = jwt.verify(token, process.env.jwt_secret);   //validating the token
        if (decoded.userId) {
            req.body.userIdFromToken = decoded.userId;
            console.log(req.body.userIdFromToken)
            next();
        } else {
            return res.send({
                success: false,
                message: "Invalid Token"
            })
            
        };
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
        
    }
}