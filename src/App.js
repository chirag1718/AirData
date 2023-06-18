import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserGrid from "./components/UserGrid/UserGrid";
import Loader from "./components/Loader/Loader";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar setUsers={setUsers} setLoading={setLoading} />
      {loading ? <Loader /> : <UserGrid users={users} />}
    </div>
  );
}

export default App;
