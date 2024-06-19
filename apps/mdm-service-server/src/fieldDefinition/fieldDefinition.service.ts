import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FieldDefinitionServiceBase } from "./base/fieldDefinition.service.base";

@Injectable()
export class FieldDefinitionService extends FieldDefinitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
