import logo from "./logo.svg";
import "./App.css";
import { MyForm } from "./components/MyForm/MyForm";
import { validationSchema } from "./helpers/validationSchems/validationScems";
import { intialValues } from "./helpers/initialValues/initialValues";
import { inputInfo } from "./helpers/inputState/inputState";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./redux/slices/modalSlice";

const App = () => {
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const handleFormik = async (value) => {
    console.log(value);

    dispatch(changeModalState(false));
  };

  return (
    <div className="App">
      <CSSTransition
        in={modal}
        timeout={1500}
        classNames={{
          enter: "modal-enter",
          enterActive: "modal-enter-active",
          exit: "modal-exit",
          exitActive: "modal-exit-active",
        }}
        unmountOnExit
      >
        <MyForm
          validationSchema={validationSchema}
          inputInfo={inputInfo}
          intialValues={intialValues}
          handleFormik={handleFormik}
        />
      </CSSTransition>
      <button
        className="openModal"
        onClick={() => dispatch(changeModalState(true))}
      >
        Open Modal
      </button>
    </div>
  );
};

export default App;
