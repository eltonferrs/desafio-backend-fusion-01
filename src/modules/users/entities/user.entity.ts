import { Exclude } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
    readonly id : string;
    
    username : string;
    @Exclude()
    password: string;

    admin?: boolean;

    constructor(){
        this.id = randomUUID()
    }
}