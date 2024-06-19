import { EntityDefinitionWhereInput } from "./EntityDefinitionWhereInput";
import { EntityDefinitionOrderByInput } from "./EntityDefinitionOrderByInput";

export type EntityDefinitionFindManyArgs = {
  where?: EntityDefinitionWhereInput;
  orderBy?: Array<EntityDefinitionOrderByInput>;
  skip?: number;
  take?: number;
};
