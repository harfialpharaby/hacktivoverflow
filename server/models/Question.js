const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title required']
    },
    body: {
        type: String,
        required: [true, 'Body required']
    },
    tags: {
        type: [String]
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    upvotes: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    downvotes: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;