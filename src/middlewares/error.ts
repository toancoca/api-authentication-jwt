import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../helpers/api-erros'

export const errorMiddleware = (
	error: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = error.statusCode ?? 500;
	let message = error.message;
	if(error.name == 'TokenExpiredError') statusCode=401;

	return res.status(statusCode).json({ message })
}
