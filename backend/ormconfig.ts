import * as path from 'path';
import { ConfigService } from './src/config/config.service';
import { Configuration } from './src/config/config.keys';

const config = new ConfigService();

export default {
  type: config.get(Configuration.DB_TYPE),
  host: config.get(Configuration.DB_HOST),
  port: config.get(Configuration.DB_PORT),
  username: config.get(Configuration.DB_USERNAME),
  password: config.get(Configuration.DB_PASSWORD),
  database: config.get(Configuration.DB_DATABASE),
  entities: [
    path.resolve(__dirname, 'src', 'modules', '**', '*.entity{.ts,.js}'),
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database', 'migrations', '*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
