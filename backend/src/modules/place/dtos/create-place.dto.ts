import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @IsNotEmpty()
  readonly country: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly place: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly goal: number;

  @IsUrl()
  @MaxLength(255)
  @IsNotEmpty()
  readonly flag: string;
}
