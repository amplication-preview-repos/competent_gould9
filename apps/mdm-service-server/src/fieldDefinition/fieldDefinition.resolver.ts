import * as graphql from "@nestjs/graphql";
import { FieldDefinitionResolverBase } from "./base/fieldDefinition.resolver.base";
import { FieldDefinition } from "./base/FieldDefinition";
import { FieldDefinitionService } from "./fieldDefinition.service";

@graphql.Resolver(() => FieldDefinition)
export class FieldDefinitionResolver extends FieldDefinitionResolverBase {
  constructor(protected readonly service: FieldDefinitionService) {
    super(service);
  }
}
