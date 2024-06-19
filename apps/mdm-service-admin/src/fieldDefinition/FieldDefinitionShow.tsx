import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const FieldDefinitionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="entity" source="entity" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <BooleanField label="required" source="required" />
        <TextField label="type" source="typeField" />
        <BooleanField label="unique" source="unique" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
