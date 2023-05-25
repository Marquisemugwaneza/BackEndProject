import ArticleModel from "../models/articleModel.js";


const createArticle = (req, res) => {

    try {
        const data = req.body;
        console.log("Successfull connected", data);
        const articleInstance = new ArticleModel({
            title: data.title,
            content: data.content,
            author: data.author || "Marquise Mugwaneza",
            image: data.image
        });
        articleInstance.save()
            .then((data) => {
                res.send({ message: "Data saved successfully", data: data });

            });

        // let response = await articleInstance.save();
        // res.status(200).json({
        //     message:"Data save Successfully",
        //     error: null,
        //     data: response
        // })

    }
    catch (err) {
        console.log("you got an erroe");
        res.send({ message: "Failed to save data" })
    }
}

const readArticle = async (req, res) => {
    try {
        const blogId = req.params.reqId;
        const query = { id: blogId };

        const result = await ArticleModel.find(query);
        if (result.length == 0) {
            res.status(404).json({
                message: "failed to read the article specified",
                error: "No data found",
                data: result

            })
        }
        else {
            res.status(200).json({
                message: "failed to read data",
                error: "internal error",
                data: null
            });
        }

        // res.send(name);
    }
    catch (err) {
        console.log("error under readArticle")
        res.status(500).json({
            message: "failed to read data",
            error: "internal error server",
            data: null
        })
    }

}

const readarticleLimited = async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    let limitation = limit * page;
    let start = limitation - limit;

    let result = await ArticleModel.find({}).skip(start)

}


const readmoreArticles = (req, res) => {
    const start = req.query.start;
    let a = req.query.name
    res.send(req.query);
}

const deleteArticle = (req, res) => {
    const id = req.query.id;
    res.send(req.query)
}
const updateArticle = (req, res) => {
    res.send("the article is alreaady deleted")
}


export { createArticle, readArticle, deleteArticle, updateArticle, readmoreArticles, readarticleLimited }