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

const signUp = async (
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

const signIn = async (
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
        return res.status(400).json({ token: createToken(user.id) });
    }

    return res.status(400).json({
        msg: "The email or password are incorrect"
    });
    
};

async function getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getUsers(req: Request, res: Response) {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error});
    }
}


async function updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}


async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const UserController = {
    signUp,
    signIn,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};



