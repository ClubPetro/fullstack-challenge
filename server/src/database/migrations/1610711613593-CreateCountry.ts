import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCountry1610711613593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'COUNTRY',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'place_to_visit',
            type: 'varchar',
          },
          {
            name: 'month',
            type: 'integer',
          },
          {
            name: 'year',
            type: 'integer',
          },
          {
            name: 'flag',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('COUNTRY');
  }
}
