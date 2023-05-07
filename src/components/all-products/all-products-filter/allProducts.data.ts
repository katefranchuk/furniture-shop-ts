export const labels = [
  {
    id: 1,
    label: "Furniture",
    category: "furniture",
    selected: false,
  },
  {
    id: 2,
    label: "Homeware",
    category: "homeware",
    selected: false,
  },
  {
    id: 3,
    label: "Sofas",
    category: "sofas",
    selected: false,
  },
  {
    id: 4,
    label: "Light fittings",
    category: "homeware",
    selected: false,
  },
  {
    id: 5,
    label: "Accessories",
    category: "accessories",
    selected: false,
  },
];

export interface ILabels {
  id: number;
  label: string;
  category: string;
  selected: boolean;
}
