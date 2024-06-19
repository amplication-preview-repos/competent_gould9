import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
