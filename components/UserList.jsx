import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts, restDeleteUser } from "../store/UsersSlice/thunk";
import { useNavigate } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.user);

  const hasUsers = users?.length > 0;

  return hasUsers ? (
    List({ users, dispatch, navigate })
  ) : (
    <p>There is not users</p>
  );
}

function List({ users, dispatch, navigate }) {
  const handleClick = (id) => {
    dispatch(restDeleteUser(id));
  };
  const handleView = (id) => {
    dispatch(getPosts(id));
    navigate("/user-view");
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
            onClick={() => handleClick(user.id)}
            style={{ background: "#850F1D " }}
          >
            Delete
          </button>
          <button
            onClick={() => handleView(user.id)}
            style={{ background: "#3CA2DC " }}
          >
            View
          </button>
        </li>
      ))}
    </ul>
  );
}
