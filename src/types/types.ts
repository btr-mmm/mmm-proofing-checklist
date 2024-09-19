export type ChecklistItem = {
  title: string;
  description: string;
};

export type Checklist = {
  title: string;
  listItems: ChecklistItem[];
};
