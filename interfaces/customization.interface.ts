export interface CustomizationCategory {
  id: string; // neceesary
  label: string; // necessary
  description: string | null; // necessary (maybe)
  required: boolean; // necessary
  maxSelections: number | null; // necessary
  customizationOptions: CustomizationOption[]; // necessary
  createdAt: string; // not necessary
  updatedAt: string; // not necessary
}

export interface CustomizationOption {
  id: string; // neccessary
  label: string; // necessary
  price: number; // necessary
  active: boolean; // necessary
  description: string | null; // necessary (maybe)
  isBaseOption: boolean; // necessary
  isDefault: boolean; // necessary
  categoryId: string; // not necessary
  createdAt: string; // not necessary
  updatedAt: string; // not necessary
  deletedAt: string | null; // not necessary

  selected: boolean;
}
