import { IsArray, IsEmpty, IsInt, IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class wallets {

    @IsNotEmpty()
    @IsString()
    @IsArray()
    public wallet : string[]

    @IsNotEmpty()
    @IsInt()
    public coId : number

}
