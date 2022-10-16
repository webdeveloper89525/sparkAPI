import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProjectRequest {

    @IsOptional()
    @IsString()
    public id?: string;

    @IsString()
    public name: string;

    @IsOptional()
    @IsNumber()
    public expectedHours?: number;

    @IsOptional()
    @IsNumber()
    public usedHours?: number;
}
