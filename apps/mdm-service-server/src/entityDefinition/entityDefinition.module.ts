import { Module } from "@nestjs/common";
import { EntityDefinitionModuleBase } from "./base/entityDefinition.module.base";
import { EntityDefinitionService } from "./entityDefinition.service";
import { EntityDefinitionController } from "./entityDefinition.controller";
import { EntityDefinitionResolver } from "./entityDefinition.resolver";

@Module({
  imports: [EntityDefinitionModuleBase],
  controllers: [EntityDefinitionController],
  providers: [EntityDefinitionService, EntityDefinitionResolver],
  exports: [EntityDefinitionService],
})
export class EntityDefinitionModule {}
