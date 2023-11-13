import UserInterface from "../users/interfaces/UserInterface";
import { getUsers, register } from "../users/services/usersApiService";

const data = {
  users: [
    {
      email: "regular@gmail.com",
      password: "Aa1234!",
      isAdmin: false,
      username: "regular",
    },
    {
      email: "admin@gmail.com",
      password: "Aa1234!",
      username: "admin",
      isAdmin: true,
    },
  ],
};

const createInitialUsers = async () => {
  try {
    data.users.forEach(async (user) => await register(user));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const initialData = async () => {
  try {
    await createInitialUsers();
    return { message: "created initial users successfully" };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default initialData;
