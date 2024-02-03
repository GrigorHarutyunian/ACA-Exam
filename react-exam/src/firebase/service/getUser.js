import { database } from "../firebase-configs";
import { ref, get } from "firebase/database";
import { showUsers } from "../../redux/slices/showUsersSlice";
export const getUsers = async (dispatch) => {
  const path = `exam/users/`;
  const eventRef = ref(database, path);
  try {
    const checkingUser = await get(eventRef);
    const users = checkingUser.val();
    dispatch(showUsers(users));
  } catch (error) {
    console.log(error);
  }
};
