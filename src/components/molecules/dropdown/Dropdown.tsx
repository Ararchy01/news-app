export interface DropdownProps {
  classNames?: DropdownClassNames;
  //  toggleButton?: ButtonProps;
  contents?: React.FunctionComponent;
}

export interface DropdownClassNames {
  dropdown?: string;
  toggleButton?: string;
  contents?: string;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = (
  props: DropdownProps
) => {
  const classNames = props.classNames || {};
  return (
    <>
      <div></div>
    </>
  );
};
