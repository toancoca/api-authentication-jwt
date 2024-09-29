"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1658149110474 = void 0;
class default1658149110474 {
    constructor() {
        this.name = 'default1658149110474';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.default1658149110474 = default1658149110474;
// CREATE TABLE `products` (
// 	`id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
//   	`name` varchar(255) DEFAULT NULL,
//   	`category_id` int,
//   	`image` varchar(255) DEFAULT NULL,
//   	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
//   	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP 
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
