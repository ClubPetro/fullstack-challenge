import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: config.get(Configuration.DB_TYPE),
        host: config.get(Configuration.DB_HOST),
        port: config.get(Configuration.DB_PORT),
        database: config.get(Configuration.DB_DATABASE),
        username: config.get(Configuration.DB_USERNAME),
        password: config.get(Configuration.DB_PASSWORD),
        entities: [
          path.resolve(__dirname, '..', 'modules', '**', '*.entity{.ts,.js}'),
        ],
        migrations: [path.resolve(__dirname, 'migrations', '*{.ts,.js}')],
      } as ConnectionOptions;
    },
  }),
];
