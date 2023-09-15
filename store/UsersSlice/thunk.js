import { addUser, setUsers, deleteUser } from "./UsersSlice";
import { TOKEN } from "../../config";

export const getUsers = () => {
  return async (dispatch) => {
    const res = await fetch("https://gorest.co.in/public/v2/users");
    const json = await res.json();
    dispatch(setUsers(json));
  };
};

export const postUser = (data) => {
  return async (dispatch) => {
    const res = await fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log({ json });
    dispatch(addUser(json));
  };
};
export const restDeleteUser = (id) => {
  return async (dispatch) => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    console.log(res.status);
    dispatch(deleteUser(id));
  };
};
