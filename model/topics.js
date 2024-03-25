const mongoose = require("mongoose");
const Question = require('./question'); 

const TopicSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    questions: { 
         type: [Question.schema],
         required: true 
    }
}); 

const Topic = mongoose.model('topic', TopicSchema);

module.exports = Topic;
