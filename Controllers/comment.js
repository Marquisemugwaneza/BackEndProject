import commentModel from "../models/commentModel.js";

const createComment = (req, res) => {

    try {
        const data = req.body;
        console.log("Successfull connected", data);
        const articleInstance = new commentModel({
            email: data.email,
            message: data.message,
            articleId: data.articleId
        });
        articleInstance.save()
            .then((data) => {
                res.send({ message: "Data saved successfully", data: data });

            });

    }
    catch (err) {
        console.log("you got an erroe");
        res.send({ message: "Failed to save data" })
    }
}
export default createComment
