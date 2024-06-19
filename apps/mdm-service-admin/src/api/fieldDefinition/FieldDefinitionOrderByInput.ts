import { SortOrder } from "../../util/SortOrder";

export type FieldDefinitionOrderByInput = {
  createdAt?: SortOrder;
  entity?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  required?: SortOrder;
  typeField?: SortOrder;
  unique?: SortOrder;
  updatedAt?: SortOrder;
};
