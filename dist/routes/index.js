"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const product_route_1 = __importDefault(require("./product.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const user_route_1 = __importDefault(require("./user.route"));
const post_route_1 = __importDefault(require("./post.route"));
const routes = (0, express_1.Router)();
routes.use('/api/auth', auth_route_1.default);
routes.use(authMiddleware_1.authMiddleware);
routes.use('/api/products', product_route_1.default);
routes.use('/api/posts', post_route_1.default);
routes.use('/api/users', user_route_1.default);
exports.default = routes;
