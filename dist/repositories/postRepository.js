"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepository = void 0;
const data_source_1 = require("../data-source");
const Post_1 = require("../entities/Post");
exports.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
