"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const api_erros_1 = require("../helpers/api-erros");
const userRepository_1 = require("../repositories/userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    async create(req, res) {
        const { name, email, password } = req.body;
        const userExists = await userRepository_1.userRepository.findOneBy({ email });
        if (userExists) {
            throw new api_erros_1.BadRequestError('E-mail já existe');
        }
        const hashPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = userRepository_1.userRepository.create({
            name,
            email,
            password: hashPassword,
        });
        await userRepository_1.userRepository.save(newUser);
        const { password: _, ...user } = newUser;
        return res.status(201).json(user);
    }
    async login(req, res) {
        var _a, _b;
        const { email, password } = req.body;
        console.log({ email, password });
        const user = await userRepository_1.userRepository.findOneBy({ email });
        if (!user) {
            throw new api_erros_1.BadRequestError('E-mail ou senha inválidos 1');
        }
        const verifyPass = await bcrypt_1.default.compare(password, user.password);
        if (!verifyPass) {
            throw new api_erros_1.BadRequestError('E-mail ou senha inválidos 2');
        }
        const access_token = jsonwebtoken_1.default.sign({ id: user.id }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : '', {
            expiresIn: '1m',
        });
        const refresh_token = jsonwebtoken_1.default.sign({ id: user.id }, (_b = process.env.JWT_PASS) !== null && _b !== void 0 ? _b : '', {
            expiresIn: '30d',
        });
        const { password: _, ...userLogin } = user;
        return res.json({
            user: userLogin,
            access_token,
            refresh_token,
        });
    }
    async getProfile(req, res) {
        return res.json(req.user);
    }
}
exports.UserController = UserController;
