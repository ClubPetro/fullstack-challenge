import { Exclude, Expose } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

@Exclude()
export class ReadPlaceDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly country: string;

  @Expose()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly place: string;

  @Expose()
  @IsNotEmpty()
  readonly goal: number;

  @Expose()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly flag: string;

  @Expose()
  @IsDateString()
  @IsNotEmpty()
  readonly createdAt: Date;

  @Expose()
  @IsDateString()
  @IsNotEmpty()
  readonly updatedAt: Date;
}
