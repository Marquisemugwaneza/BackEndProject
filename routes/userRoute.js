import express from "express";
import bodyParser from "body-parser";
import Structure from "../models/UserModel.js"

const router = express.Router();

//Getting users
router.get("/", async (req, res) => {
    try {
        const response = await Structure.find();
        res.json(response);
    } catch (err) {
        res.send("error" + err);
    }
});

//Getting one

router.get("/:id", async (req, res) => {
    try {
        const response = await Structure.findById(req.params.id);
        res.json(response);
    } catch (err) {
        res.send("error" + err);
    }
    req.params.id;
});
//Creating one

router.post("/", async (req, res) => {
    const data = req.body;

    try {
        const savedUser = await Structure.findOne({ email: data.email });
        if (savedUser) {
            return res.status(409).json({
                message: "User already exists",
            });
        }
        const response = new userSchema({
            name: data.name,
            email: data.email,
            password: data.password,
            userId: data.userId,
        });
        const user = await response.save();
        res.json({
            message: "User created successfully",

            data: user,
        });
    } catch (err) {
        res.send([{ message: "error occured " }, err]);
    }
});
//Login user

router.post("/login", async (req, res) => {
    const data = req.body;
    let email = data.email;
    try {
        const savedUser = await Structure.findOne({ email: data.email });
        if (savedUser) {
            return res.status(409).json({
                message: "User login sucess",
                data: null,
                error: null,
            });
        } else {
            return res.status(409).json({
                message: "Don't have an account, create one",
            });
        }

    } catch (error) {
        console.log("Error occured in login: ", error);
        res.status(500).json({
            message: "Eror occured in login",
            error: error,
            data: null,
        });
    }
});
//Updating one
router.patch("/:id", async (req, res) => {
    try {
        const response = await userSchema.findById(req.params.id);
        user.email = req.body.email;
        const a = await response.save();
        res.json(a);
    } catch (error) {
        res.send([{ message: "error occured " }, error]);
    }
});
//Deleting one
router.delete("/:id", async (req, res) => {
    try {
        const response = await Structure.findById(req.params.id);
        user.email = req.body.email;
        const a = await response.remove();
        res.json(a);
    } catch (error) {
        res.send([{ message: "error occured " }, error]);
    }
});

export default router;