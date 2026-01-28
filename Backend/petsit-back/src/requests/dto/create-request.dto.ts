import { IsInt, IsOptional, IsString, IsDateString, Min} from 'class-validator';
export class CreateRequestDto {

  @IsInt()
  @Min(1)
  sitterId: number;

  @IsString()
  animalType: string;

  @IsString()
  petName: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  description: string;

}
