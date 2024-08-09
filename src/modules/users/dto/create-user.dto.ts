import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";
import { hashSync } from "bcryptjs";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUser {

    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    @IsString()
    @Transform(({value}:{ value:string}) => hashSync(value, 10),{
        groups: ['transform'],
    })
    password : string;

    @IsOptional()
    admin  : boolean;
}