import { Controller, Post, Get, Body, Put, Param, Delete } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUser } from "./dto/create-user.dto";
import { UpdateUser } from "./dto/update-user.dto";

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService ) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    findUser(@Param('id') id: string) {
        return this.userService.findUser(id);
    }

    @Post()
    createUser(@Body() data: CreateUser){
        return this.userService.createUser(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: UpdateUser){
        return this.userService.updateUSer(id,data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(id);
    }

}
