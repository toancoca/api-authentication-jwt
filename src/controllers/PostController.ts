import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-erros'
import { postRepository } from '../repositories/postRepository';
import slugify from 'slugify';


export class PostController {
	async create(req: Request, res: Response) {
		const { title,description, image } = req.body

		const slug = slugify(title);

		const newProduct = postRepository.create({
			title, description, image, slug
		})

		const product = await postRepository.save(newProduct)

		return res.status(201).json({product})
	}

	async getPosts(req: Request, res: Response) {
		const posts = await postRepository.find();
		return res.json({success: true, message: "Get post success", data: posts})
	}
}
