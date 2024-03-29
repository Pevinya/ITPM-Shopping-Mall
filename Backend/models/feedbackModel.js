const mongoose =require("mongoose");

const feedbackSchem = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
    //   email: {
    //     type: String,
    //     required: true
    //   },

      filterOption: {
        type: String,
        required: true
      },
    
    text:{
        type:String,
        required: true,
    },

    rating:{
        type:Number,
        required:true
    },
     createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required : true
    }, 
}, {
        timeseries: true
    });
    
module.exports  =mongoose.model("feedback", feedbackSchem);
