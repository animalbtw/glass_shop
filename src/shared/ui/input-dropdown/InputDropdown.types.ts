export type InputDropdownProps = {
  placeholder: string;
  labelField: string;
  valueField: string;
  isDisabled?: boolean;
  options: {
    value: number | number;
    label: string | any;
  }[];
};
