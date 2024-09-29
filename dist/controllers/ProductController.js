"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productRepository_1 = require("../repositories/productRepository");
class ProductController {
    async create(req, res) {
        const { name, image, category_id } = req.body;
        const newProduct = productRepository_1.productRepository.create({
            name, image, category_id
        });
        const product = await productRepository_1.productRepository.save(newProduct);
        return res.status(201).json({ product });
    }
    async getProducts(req, res) {
        const products = await productRepository_1.productRepository.find();
        return res.json({ success: true, message: "Get post success", data: products });
    }
}
exports.ProductController = ProductController;
