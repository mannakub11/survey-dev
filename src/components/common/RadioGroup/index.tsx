import { useCallback, ChangeEvent } from "react";
import { RadioGroup as RadioGroupMui, FormControl } from "@mui/material";
import { RadioGroupProps } from "./type";

const RadioGroup = (props: RadioGroupProps) => {
  const {
    value,
    onChange,
    children,
    name = "radio-group",
    row = false,
  } = props;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <FormControl component="fieldset">
      <RadioGroupMui
        aria-label="gender"
        name={name}
        value={value}
        onChange={handleChange}
        row={row}
      >
        {children}
      </RadioGroupMui>
    </FormControl>
  );
};

export default RadioGroup;
