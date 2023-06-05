const mongoose= require("mongoose");

const attendenceSchema= mongoose.Schema({
    subject:{
        type:String,
        trim:true
    },
    attendence:[
        {
            status:{
                type:Boolean
            },
            date:{
                type:Date,
                default: new Date(Date.to)
            }
        }
    ],
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    }
})