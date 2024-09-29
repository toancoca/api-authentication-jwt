"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
const postRoutes = (0, express_1.Router)();
postRoutes.get('/', new PostController_1.PostController().getPosts);
postRoutes.post('/create', new PostController_1.PostController().create);
exports.default = postRoutes;
