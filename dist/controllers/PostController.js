"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postRepository_1 = require("../repositories/postRepository");
const slugify_1 = __importDefault(require("slugify"));
class PostController {
    async create(req, res) {
        const { title, description, image } = req.body;
        const slug = (0, slugify_1.default)(title);
        const newProduct = postRepository_1.postRepository.create({
            title, description, image, slug
        });
        const product = await postRepository_1.postRepository.save(newProduct);
        return res.status(201).json({ product });
    }
    async getPosts(req, res) {
        const posts = await postRepository_1.postRepository.find();
        return res.json({ success: true, message: "Get post success", data: posts });
    }
}
exports.PostController = PostController;
