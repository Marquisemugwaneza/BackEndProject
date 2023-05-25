import mongoose from "mongoose";

const structure = new mongoose.Schema({
    email: {
        type: String,
        require: "enter your email",

    },
    message: {
        type: String,
        require: "enter your message"

    },
    articleId: {
        type: String,
        require: " article id"

    }
});
export default mongoose.model("comment", structure);