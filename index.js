import express from "express";
import cors from "cors"
import welcome from "./Controllers/welcome.js"
import articles from "./routes/articles.js"
import { deleteArticle, readArticle, updateArticle, readmoreArticles } from "./Controllers/articles.js";
import mongoose from "mongoose";
import commentRoutes from "./routes/commentRoutes.js";


console.log("Marquise");

const app = express();
app.use(cors());

app.get("/api/v1", welcome);

app.use("/api/v1/articles", articles);
app.use("/api/v1/comment", commentRoutes);

// app.use("/api/v1", readArticle);
// app.post("/api/v1/delete", deleteArticle);
// app.get("/api/v1/update", updateArticle);
// app.get("/api/v1/more", readmoreArticles);



// app.get("/", (req, res) => {
//     res.send(" Hey I'm Marquise")
// });

const port = 3000;

const connectToMongo = () => {
    mongoose.connect("mongodb+srv://marquineza:marquineza@cluster0.tjcegsc.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database connected");
        }).catch((err) => {
            console.log("failed to connect", err);
        })
}

app.listen(port, () => {
    console.log("the serve is running" + port);
    connectToMongo();
});