import { useDispatch } from "react-redux";
// import { deleteUser } from "../store/UsersSlice/UsersSlice";
import { useSelector } from "react-redux";
import { restDeleteUser } from "../store/UsersSlice/thunk";

export function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);

  const hasUsers = users?.length > 0;

  return hasUsers ? List({ users, dispatch }) : <p>There is not users</p>;
}

function List({ users, dispatch }) {
  const handleClick = (id) => {
    dispatch(restDeleteUser(id));
  };

  return (
    <ul className="users">
      {users.map((user) => (
        <li key={user.id} className="user">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.status}</p>
          <button
            onClick={() => {
              console.log({ user });
              handleClick(user.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
