const getUser = (req, res) => {
    try {
        res.send("get user");
    } catch (err) {
        console.log("Error occured in user: ", err);
    }
};
const createUser = (req, res) => {
    try {
        res.send("createUser");
    } catch (err) {
        console.log("Error occured in create User: ", err);
    }
};

const updateUser = async (req, res) => {
    try {
        const data = req.body;
        const userInstance = new userSchema({
            name: data.name,
            email: data.email,
            password: data.password,
            userId: data.userId,
        });
        let response = await userInstance.save();
        res.status(200).json({
            message: "User created successfully",
            error: null,
            data: response,
        });
    } catch (err) {
        console.log("Error occured in user Controller: ", err);
        res.status(500).json({
            message: "Error occured",
            error: error,
            data: null,
        });
    }
};
export { getUser, createUser, updateUser };