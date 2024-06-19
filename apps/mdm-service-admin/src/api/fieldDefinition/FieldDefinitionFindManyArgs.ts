import { FieldDefinitionWhereInput } from "./FieldDefinitionWhereInput";
import { FieldDefinitionOrderByInput } from "./FieldDefinitionOrderByInput";

export type FieldDefinitionFindManyArgs = {
  where?: FieldDefinitionWhereInput;
  orderBy?: Array<FieldDefinitionOrderByInput>;
  skip?: number;
  take?: number;
};
