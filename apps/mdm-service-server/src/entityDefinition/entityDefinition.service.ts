import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntityDefinitionServiceBase } from "./base/entityDefinition.service.base";

@Injectable()
export class EntityDefinitionService extends EntityDefinitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
