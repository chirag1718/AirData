import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserGrid from "./components/UserGrid/UserGrid";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar setUsers={setUsers} setLoading={setLoading} />
      {loading ? <span className="loader">Loading</span> 
       : <UserGrid users={users} />}
    </div>
  );
}

export default App;
