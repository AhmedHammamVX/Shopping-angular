const mongoDB=require('mongoose')

const userSchema=mongoDB.Schema({
    username:{
        require:true,
        type: String,
    },
    email:{
        require:true,
        type: String,
    },
    password:{
        require:true,
        type: String,
    },
    whereHearAboutUs:{
        require:true,
        type: String,
    }
});

module.exports = mongoDB.model("User",userSchema);