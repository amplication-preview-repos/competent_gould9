/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsBoolean, IsEnum } from "class-validator";
import { EnumFieldDefinitionTypeField } from "./EnumFieldDefinitionTypeField";

@InputType()
class FieldDefinitionCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  entity?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  required?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumFieldDefinitionTypeField,
  })
  @IsEnum(EnumFieldDefinitionTypeField)
  @IsOptional()
  @Field(() => EnumFieldDefinitionTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  unique?: boolean | null;
}

export { FieldDefinitionCreateInput as FieldDefinitionCreateInput };
