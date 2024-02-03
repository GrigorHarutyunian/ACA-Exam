import { Field } from "formik";

import Checkbox from "@mui/material/Checkbox";
export const CustomCheckbox = (info) => {
  return (
    <label>
      {info.label}
      <Field control={<Checkbox />} as={Checkbox} {...info} />
    </label>
  );
};
