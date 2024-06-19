import { FieldDefinition as TFieldDefinition } from "../api/fieldDefinition/FieldDefinition";

export const FIELDDEFINITION_TITLE_FIELD = "name";

export const FieldDefinitionTitle = (record: TFieldDefinition): string => {
  return record.name?.toString() || String(record.id);
};
