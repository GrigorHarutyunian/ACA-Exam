import { Field, ErrorMessage } from "formik";
import { Radio } from "@mui/material";
export const CustomRadioButton = (info) => (
  <div>
    {info.options.map((option) => (
      <label key={option.value}>
        {option.label}
        <Field as={Radio} type="radio" name="radioGroup" value={option.value} />
      </label>
    ))}
    <ErrorMessage name="radioGroup" component="div" className="error" />
  </div>
);
