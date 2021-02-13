import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdatePlaceDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly place: string;

  @IsNumber()
  @IsNotEmpty()
  readonly goal: number;
}
