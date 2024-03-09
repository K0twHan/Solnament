import { IsInt, IsNotEmpty, IsString } from "class-validator";



export class CreateUserDto {
    @IsNotEmpty()
    @IsInt()
    public coId : number

    @IsNotEmpty()
    @IsString()
    public username : string

    @IsNotEmpty()
    @IsString()
    public wallet : string

    @IsNotEmpty()
    @IsInt()
    public poolId : number 

}
