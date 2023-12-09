export interface IItem {
  id: number | string;
  code: string;
  title: string;
  flagUrl: string;
}

export interface IDropdownProps {
  list: IItem[];
  onSelect: (args: IItem) => void;
  selected: IItem | null;
}
