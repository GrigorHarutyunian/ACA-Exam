import logo from "./logo.svg";
import "./App.css";
import { MyForm } from "./components/MyForm/MyForm";
import { validationSchema } from "./helpers/validationSchems/validationScems";
import { intialValues } from "./helpers/initialValues/initialValues";
import { inputInfo } from "./helpers/inputState/inputState";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "./redux/slices/modalSlice";
import { addUser } from "./firebase/service/addUser";
import { generateUserId } from "./helpers/generators/generateUserId";
import { useEffect } from "react";
import { getUsers } from "./firebase/service/getUser";

const App = () => {
  const modal = useSelector((store) => store.modal);
  const users = useSelector((store) => store.showUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  const handleFormik = async (value) => {
    const id = generateUserId(value.email);
    addUser(id, value);
    dispatch(changeModalState(false));
  };

  const arrayUsers = [];
  for (let key in users) {
    arrayUsers.push(users[key].description);
  }

  console.log(arrayUsers);

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
