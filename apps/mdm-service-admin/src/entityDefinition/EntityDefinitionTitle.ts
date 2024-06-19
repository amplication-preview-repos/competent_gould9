import { EntityDefinition as TEntityDefinition } from "../api/entityDefinition/EntityDefinition";

export const ENTITYDEFINITION_TITLE_FIELD = "name";

export const EntityDefinitionTitle = (record: TEntityDefinition): string => {
  return record.name?.toString() || String(record.id);
};
