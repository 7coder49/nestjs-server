import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Departments{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    section: string
}