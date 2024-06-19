import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntityDefinitionService } from "./entityDefinition.service";
import { EntityDefinitionControllerBase } from "./base/entityDefinition.controller.base";

@swagger.ApiTags("entityDefinitions")
@common.Controller("entityDefinitions")
export class EntityDefinitionController extends EntityDefinitionControllerBase {
  constructor(protected readonly service: EntityDefinitionService) {
    super(service);
  }
}
