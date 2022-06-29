export interface IFilterOption {
  optionId: string;
  option: string;
  isChecked: boolean;
}

export interface IFilterMap {
  [key: string]: string[];
}

export interface IFilter {
  filterId: string;
  filter: string;
  options: IFilterOption[];
}
