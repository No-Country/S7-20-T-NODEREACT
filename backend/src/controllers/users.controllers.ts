import UserModel, { User } from '../models/users.model';
import { Request, Response } from 'express'
import { hashPassword } from '../utils/bcrypt'
import config from "../config/config";
import jwt from "jsonwebtoken";

function createToken(user: User) {
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
async function executeQuerys() {
    const newUser = new UserModel({
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'bfix38@gmail.com',
        password: hashPassword('pass12345')
    });

    await newUser.save()
    console.log(newUser)
}

const usersArray = [{
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'bfix77@gmail.com',
    password: hashPassword('pass12345')
}, {
    firstName: 'Joshep',
    lastName: 'Doe',
    email: 'fix008@gmail.com',
    password: hashPassword('pass12345')
},
{
    firstName: 'Wick',
    lastName: 'Doe',
    email: 'bix99@gmail.com',
    password: hashPassword('pass12345')
}]
export async function getUserByEmail(req: Request, res: Response) {
    await UserModel.deleteMany();
    await UserModel.insertMany(usersArray);

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


