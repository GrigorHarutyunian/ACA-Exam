import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import { CustomInpit } from "../CustomInput/CustomInput";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import "./MyForm.css";
import { changeModalState } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
export const MyForm = ({
  validationSchema,
  inputInfo,
  intialValues,
  handleFormik,
}) => {
  const dispatch = useDispatch();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={intialValues}
      onSubmit={handleFormik}
    >
      <div
        onClick={() => dispatch(changeModalState(false))}
        key={1}
        className="formDiv"
      >
        <Form onClick={(e) => e.stopPropagation()} className="form">
          {inputInfo.map((info, index) => {
            return info.type === "text" ? (
              <CustomInpit key={index} {...info} />
            ) : info.type === "radio" ? (
              <CustomRadioButton key={index} {...info} />
            ) : (
              <CustomCheckbox key={index} {...info} />
            );
          })}
          <Button type="submit">ADD</Button>
        </Form>
      </div>
    </Formik>
  );
};
