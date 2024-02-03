import { ref, update } from "firebase/database";
import { database } from "../firebase-configs";

export const addUser = async (id, data) => {
  console.log(data.id);
  const userId = id;
  const path = `exam/users/${userId}`;
  const eventRef = ref(database, path);

  await update(eventRef, {
    description: {
      id,
      ...data,
    },
  });
};
