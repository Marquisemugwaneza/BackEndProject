import mongoose from "mongoose";

const structure = new mongoose.Schema({

    title: {
        type: String,
        required: "Title is required"
    },
    content: {
        type: String,
        required: "Content is always required"

    },
    author: {
        type: String
    },
    image: {
        type: String
    }

});
export default mongoose.model("articles", structure);