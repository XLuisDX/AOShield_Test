import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../store/UsersSlice/thunk";

export function UserForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(user));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        type="text"
        required
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        required
        onChange={handleChange}
      />
      <select name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select name="status" onChange={handleChange}>
        <option value="active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit" style={{ backgroundColor: "green" }}>
        Add
      </button>
    </form>
  );
}
