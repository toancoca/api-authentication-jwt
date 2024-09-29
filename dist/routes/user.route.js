"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', new PostController_1.PostController().getPosts);
exports.default = userRoutes;
