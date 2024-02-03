import { ref, remove, get } from "firebase/database";
import { database } from "../firebase-configs";
import { getUsers } from "./getUser";
export const removeUser = async (userArr, dispatch) => {
  const path = `exam/users`;

  try {
    const checkingUsers = await get(ref(database, path));

    if (checkingUsers.exists()) {
      for (let userId of userArr) {
        const userRef = ref(database, `${path}/${userId}`);
        await remove(userRef);
        getUsers(dispatch);
      }
    } else {
      console.log("No users");
    }
  } catch (error) {
    console.error(1, error.message);
  }
};
