import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('posts')
export class Post {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	title: string

	@Column({ type: 'text' })
	description: string

	@Column({ type: 'text' })
	slug: string

	@Column({ type: 'text'})
	image: string

}
