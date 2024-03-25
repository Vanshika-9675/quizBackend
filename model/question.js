const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    text: { 
         type: String, 
         required: true
         },   
    options: { 
         type: [String], 
         required: true 
        },
    correctAnswerIndex: { 
        type: Number, 
        required: true 
    }
  }
);

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;