/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FieldDefinitionWhereInput } from "./FieldDefinitionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FieldDefinitionCountArgs {
  @ApiProperty({
    required: false,
    type: () => FieldDefinitionWhereInput,
  })
  @Field(() => FieldDefinitionWhereInput, { nullable: true })
  @Type(() => FieldDefinitionWhereInput)
  where?: FieldDefinitionWhereInput;
}

export { FieldDefinitionCountArgs as FieldDefinitionCountArgs };
