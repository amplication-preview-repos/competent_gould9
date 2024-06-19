import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
