import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const FieldDefinitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="entity" source="entity" />
        <TextInput label="name" source="name" />
        <BooleanInput label="required" source="required" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="unique" source="unique" />
      </SimpleForm>
    </Edit>
  );
};
