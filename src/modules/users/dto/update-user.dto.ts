import { CreateUser } from "./create-user.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateUser extends PartialType(CreateUser){};