"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const authRoutes = (0, express_1.Router)();
authRoutes.post('/login', new AuthController_1.AuthController().login);
authRoutes.post('/register', new AuthController_1.AuthController().register);
exports.default = authRoutes;
