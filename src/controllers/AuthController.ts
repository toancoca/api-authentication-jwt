import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'
import { BadRequestError } from '../helpers/api-erros'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export class AuthController {
    async register(req: Request, res: Response) {
        const { name, email, password } = req.body

        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            throw new BadRequestError('E-mail Existed!')
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword,
        })

        await userRepository.save(newUser)

        const { password: _, ...user } = newUser

        return res.status(201).json(user)
    }
    async login(req: Request, res: Response) {
        const { email, password } = req.body
        console.log({ email, password })

        const user = await userRepository.findOneBy({ email })

        if (!user) {
            throw new BadRequestError('E-mail Or Password not corrent')
        }

        const verifyPass = await bcrypt.compare(password, user.password)

        if (!verifyPass) {
            throw new BadRequestError('E-mail ou senha inválidos 2')
        }

        const access_token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '1m',
        });
        const refresh_token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '30d',
        })

        const { password: _, ...userLogin } = user

        return res.json({
            user: userLogin,
            access_token,
            refresh_token,
        })
    }
}