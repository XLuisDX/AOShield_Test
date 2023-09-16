import "./App.css";
import { useEffect } from "react";
import { getUsers } from "../store/UsersSlice/thunk";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { UserPosts } from "../components/UserPosts";
import { Home } from "../components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="page">
      <header>
        <h1>Test</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-view" element={<UserPosts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
