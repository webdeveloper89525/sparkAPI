import {IsNumber, IsString, IsUUID } from 'class-validator';

class BaseProject {
    @IsUUID()
    public id: string;

    @IsString()
    public name: string;

    @IsNumber()
    public expectedHours: number;

    @IsNumber()
    public usedHours: number;
}

export class ProjectResponse extends BaseProject {
    @IsNumber()
    public remainHours?: number;

    @IsNumber()
    public completPercent?: number;
}

export class ProjectDeleteResponse {
    @IsString()
    public status: string;
}
