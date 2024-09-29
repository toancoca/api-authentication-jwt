import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658149110474 implements MigrationInterface {
    name = 'default1658149110474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}


// CREATE TABLE `products` (
// 	`id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   	`name` varchar(255) DEFAULT NULL,
//   	`category_id` int,
//   	`image` varchar(255) DEFAULT NULL,
//   	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
//   	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP 
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
//433316