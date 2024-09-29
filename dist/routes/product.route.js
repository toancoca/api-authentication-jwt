"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
const productRoutes = (0, express_1.Router)();
productRoutes.get('/', new ProductController_1.ProductController().getProducts);
productRoutes.post('/create', new ProductController_1.ProductController().create);
exports.default = productRoutes;
