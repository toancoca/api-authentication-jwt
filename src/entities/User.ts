import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', unique: true })
	email: string

	@Column({ type: 'text' })
	password: string
}


// CREATE TABLE `users` (
// 	`id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
// 	`name` varchar(200) DEFAULT NULL,
// 	`email` varchar(200) DEFAULT NULL,
// 	`password` varchar(255) DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;