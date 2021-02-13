import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1612925931519 implements MigrationInterface {
    name = 'firstMigration1612925931519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "places" ("id" SERIAL NOT NULL, "country" character varying(100) NOT NULL, "place" character varying NOT NULL, "goal" integer NOT NULL, "flag" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_CountryPlace" UNIQUE ("country", "place"), CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "places"`);
    }

}
