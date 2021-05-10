import { Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [ConfigModule, DatabaseModule, PlaceModule],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.API_PORT);
  }
}
