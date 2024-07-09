const { Schema, default: mongoose , model } = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    blogId:{
        type: Schema.Types.ObjectId,
        ref: "blog",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }
} , {timestamps: true});

const Comment = model("comment",commentSchema);

module.exports = Comment;