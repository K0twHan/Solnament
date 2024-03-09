import { IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class CreateCompanyDto {

    @IsNotEmpty()
    @IsString()
    public name : string

    @IsNotEmpty()
    @IsString()
    public akey : string

}
