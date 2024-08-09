import { randomUUID } from "crypto";

export class Create{
    readonly id : string;
    name : string;
    model : string;
    fabricated : string;
    capacity : number;
    createdById: string;

    constructor(){
        this.id = randomUUID();
    }
}