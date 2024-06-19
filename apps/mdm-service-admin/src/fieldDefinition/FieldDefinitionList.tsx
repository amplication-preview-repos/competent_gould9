import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FieldDefinitionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FieldDefinitions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="entity" source="entity" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <BooleanField label="required" source="required" />
        <TextField label="type" source="typeField" />
        <BooleanField label="unique" source="unique" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
