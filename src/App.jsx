import "./App.css";
import { UserList } from "../components/UserList";
import { UserForm } from "../components/UserForm";
import { useEffect } from "react";
import { getUsers } from "../store/UsersSlice/thunk";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="page">
      <header>
        <h1>Tets</h1>
      </header>
      <main>
        <UserForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;
