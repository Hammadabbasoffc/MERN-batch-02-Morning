import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const registerUser = async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    // console.log(userName, userEmail, userPassword);

    if (!userName || !userEmail || !userPassword) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {

        const existingUser = await User.findOne({ userEmail });

        if (existingUser) {
            return res.status(500).json({ message: "User Already Exists" });
        }

        const hashPassword = bcrypt.hashSync(userPassword, 10)
        // console.log(hashPassword);

        const user = await User.create({ userName, userEmail, userPassword: hashPassword })

        // console.log(user);


        // if (!user) {
        //     return res.status(500).json({ message: "User not created" });
        // }

        return res.status(200).json({
            message: "User created Successfully",
            user
        })

    } catch (error) {
        return res.status(500).json({ message: "User not created", error });
    }
}

const loginUser = async (req, res) => {

    console.log(req);


    const { userEmail, userPassword } = req.body
    if (!userEmail || !userPassword) {
        res.status(400).json({
            message: "Invalid Credentails"
        })
    }

    try {

        const existingUser = await User.findOne({ userEmail })

        if (!existingUser) {
            res.status(400).json({
                message: "Invalid Credentails"
            })
        }

        const isMatch = bcrypt.compareSync(userPassword, existingUser.userPassword)

        console.log(isMatch);


        if (!isMatch) {
            res.status(400).json({
                message: "Invalid Credentails"
            })
        }

        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(200).json({
            message: "User Loggedin Successfully",
            existingUser,
            token
        })

    } catch (error) {
        res.status(400).json({
            message: "Invalid Credentails",
            error
        })
    }
}

export { registerUser, loginUser }