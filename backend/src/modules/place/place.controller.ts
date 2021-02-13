import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaceDto, ReadPlaceDto, UpdatePlaceDto } from './dtos';

import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly _placeService: PlaceService) {}

  @Get(':id')
  findPlaceById(@Param('id', ParseIntPipe) id: number): Promise<ReadPlaceDto> {
    return this._placeService.findPlaceById(id);
  }

  @Get()
  findAllPlaces(): Promise<ReadPlaceDto[]> {
    return this._placeService.findAllPlaces();
  }

  @Post()
  createPlace(@Body() place: CreatePlaceDto): Promise<ReadPlaceDto> {
    return this._placeService.createPlace(place);
  }

  @Patch(':id')
  updatePlace(
    @Param('id', ParseIntPipe) id: number,
    @Body() place: UpdatePlaceDto,
  ): Promise<ReadPlaceDto> {
    return this._placeService.updatePlace(id, place);
  }

  @Delete(':id')
  deletePlace(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this._placeService.deletePlace(id);
  }
}
