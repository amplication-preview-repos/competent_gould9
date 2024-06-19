import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FieldDefinitionService } from "./fieldDefinition.service";
import { FieldDefinitionControllerBase } from "./base/fieldDefinition.controller.base";

@swagger.ApiTags("fieldDefinitions")
@common.Controller("fieldDefinitions")
export class FieldDefinitionController extends FieldDefinitionControllerBase {
  constructor(protected readonly service: FieldDefinitionService) {
    super(service);
  }
}
