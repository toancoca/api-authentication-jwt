"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    var _a;
    let statusCode = (_a = error.statusCode) !== null && _a !== void 0 ? _a : 500;
    let message = error.message;
    if (error.name == 'TokenExpiredError')
        statusCode = 401;
    return res.status(statusCode).json({ message });
};
exports.errorMiddleware = errorMiddleware;
