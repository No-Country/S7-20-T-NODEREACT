import UserModel, { IUser } from '../models/users.model';
import { Request, Response } from 'express'
import { hashPassword } from '../utils/bcrypt'
import config from "../config/config";
import jwt from "jsonwebtoken";

function createToken(user: IUser) {
    return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400
    });
}

export const signUp = async (
    req: Request,
    res: Response
): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please. Send your email and password" });
    }

    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ msg: "The User already Exists" });
    }

    const newUser = new UserModel(req.body);
    await newUser.save();
    console.log(newUser)
    return res.status(201).json(newUser);
};

export const signIn = async (
    req: Request,
    res: Response
): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please. Send your email and password" });
    }

    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: "The User does not exists" });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(400).json({ token: createToken(user) });
    }

    return res.status(400).json({
        msg: "The email or password are incorrect"
    });
};

export async function getUserByEmail(req: Request, res: Response) {
    const getUser = await UserModel.findOne({ email: "bfix77@gmail.com" })
    res.status(200).json({
        getUser
    })
}
export async function getAllUsers(req: Request, res: Response) {
    const getAllUser = await UserModel.find({}, { firstName: 1, _id: 0 })

    res.status(200).json({
        getAllUser
    })
}

export async function updateUser(req: Request, res: Response) {
    const putUser = await UserModel.findOneAndUpdate({ email: "" }, { firstName: "" }, { new: true })
    res.status(200).json(putUser)
}

export async function deleteUser(req: Request, res: Response) {
    const deleteUser = await UserModel.findOneAndDelete({ email: "" })
    res.status(200).json(deleteUser)
}


