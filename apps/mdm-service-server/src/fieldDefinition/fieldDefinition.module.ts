import { Module } from "@nestjs/common";
import { FieldDefinitionModuleBase } from "./base/fieldDefinition.module.base";
import { FieldDefinitionService } from "./fieldDefinition.service";
import { FieldDefinitionController } from "./fieldDefinition.controller";
import { FieldDefinitionResolver } from "./fieldDefinition.resolver";

@Module({
  imports: [FieldDefinitionModuleBase],
  controllers: [FieldDefinitionController],
  providers: [FieldDefinitionService, FieldDefinitionResolver],
  exports: [FieldDefinitionService],
})
export class FieldDefinitionModule {}
