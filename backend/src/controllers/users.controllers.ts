import User from '../models/users.model'
import { Request, Response } from 'express'
import { hashPassword } from '../utils/bcrypt'

async function executeQuerys() {
    const newUser = new User({
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
    await User.deleteMany();
    await User.insertMany(usersArray);

    const getUser = await User.findOne({ email: "bfix77@gmail.com" })
    res.status(200).json({
        getUser
    })
}
export async function getAllUsers(req: Request, res: Response) {
    const getAllUser = await User.find({}, { firstName: 1, _id: 0 })

    res.status(200).json({
        getAllUser
    })
}

export async function updateUser(req: Request, res: Response) {
    const putUser = await User.findOneAndUpdate({ email: "" }, { firstName: "" }, { new: true })
    res.status(200).json(putUser)
}

export async function deleteUser(req: Request, res: Response) {
    const deleteUser = await User.findOneAndDelete({ email: "" })
    res.status(200).json(deleteUser)
}


