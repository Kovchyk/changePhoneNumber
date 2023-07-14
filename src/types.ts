export interface IItem {
  id: number;
  code: string;
  title: string;
  flagUrl: string;
}

export interface IDropdownProps {
  list: IItem[];
  onSelect: (args: IItem) => void;
  selected: IItem;
}
