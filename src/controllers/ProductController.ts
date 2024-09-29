import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-erros'
import { productRepository } from '../repositories/productRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class ProductController {
	async create(req: Request, res: Response) {
		const { name, image, category_id } = req.body

		const newProduct = productRepository.create({
			name, image, category_id
		})

		const product = await productRepository.save(newProduct)

		return res.status(201).json({product})
	}

	async getProducts(req: Request, res: Response) {
		const products = await productRepository.find();
		return res.json({success: true, message: "Get post success", data: products})
	}
}
