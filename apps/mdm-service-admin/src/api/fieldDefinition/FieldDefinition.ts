export type FieldDefinition = {
  createdAt: Date;
  entity: string | null;
  id: string;
  name: string | null;
  required: boolean | null;
  typeField?: "Option1" | null;
  unique: boolean | null;
  updatedAt: Date;
};
