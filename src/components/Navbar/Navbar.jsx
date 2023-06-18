import "./navbar.css";
import axios from "axios";

const Navbar = ({ setUsers, setLoading }) => {
  const handleClick = async () => {
    setLoading(true);
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(response.data.data);
    setLoading(false);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo" >
          AirData
        </div>
        <div>
          <button className="nav-btn" onClick={handleClick}>
            Get Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
