import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FieldDefinitionWhereInput = {
  entity?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  required?: BooleanNullableFilter;
  typeField?: "Option1";
  unique?: BooleanNullableFilter;
};
