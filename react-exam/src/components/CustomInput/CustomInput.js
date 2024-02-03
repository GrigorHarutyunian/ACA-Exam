import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
export const CustomInpit = (props) => {
  return (
    <div className="divField">
      <Field as={TextField} {...props} />
      <ErrorMessage className="error" name={props.name} component="div" />
    </div>
  );
};
