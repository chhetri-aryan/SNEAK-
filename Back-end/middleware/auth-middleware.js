const jwt = require("jsonwebtoken");
const User = require("../models/user-models");
const { Email, Password } = require("@mui/icons-material");

const authMiddleware =  async (req, res, next) => {
    const token = req.header("Authorization");
    
    if(!token) {
        return res
        .status(401)
        .json({msg: "Unauthorized HTTP, Token not provided"});
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("Token from auth middleware", jwtToken);

    try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
    

    const userData = await User.findOne({email:isVerified.email}).
    select({
        password: 0,
    });
    
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    // console.log("UserDATA: -->", userData)
    next();

    } catch (error) {
        return res.status(401).json({msg: "Unauthorized, Invalid Token."});
    }


   
};

module.exports = authMiddleware;