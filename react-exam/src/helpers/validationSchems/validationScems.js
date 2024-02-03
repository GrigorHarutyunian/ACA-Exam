import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z]*$/, "Name must only contain letter")
    .test(
      "custom",
      "First Leeter have been Uppercase",
      (val) => val[0] >= "A" && val[0] <= "Z"
    ),
  lastName: Yup.string("only string")
    .required("the line is required")
    .matches(/^[a-zA-Z]*$/, "Last Name must only contain letter"),
  email: Yup.string()
    .email("invalid email")
    .required("the line is required")
    .matches(/(mail\.com|mail\.ru|gmail\.com)$/, "custom invalid error"),
  radioGroup: Yup.string()
    .oneOf(["male", "female"])
    .required("Please select an option"),
  validation: Yup.boolean("asss").oneOf([true]).required("click in it"),
});
