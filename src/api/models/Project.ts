import { IsNotEmpty, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('project')
export class Project {

    @PrimaryColumn('uuid')
    @IsOptional()
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @Column()
    public expectedHours: number;

    @Column()
    public usedHours: number;
}
