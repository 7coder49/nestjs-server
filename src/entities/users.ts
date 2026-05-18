import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    dept: string
    
    @Column()
    age: number
}