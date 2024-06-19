import * as graphql from "@nestjs/graphql";
import { EntityDefinitionResolverBase } from "./base/entityDefinition.resolver.base";
import { EntityDefinition } from "./base/EntityDefinition";
import { EntityDefinitionService } from "./entityDefinition.service";

@graphql.Resolver(() => EntityDefinition)
export class EntityDefinitionResolver extends EntityDefinitionResolverBase {
  constructor(protected readonly service: EntityDefinitionService) {
    super(service);
  }
}
