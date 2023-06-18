import "./usergrid.css";

const UserGrid = ({ users }) => {
  return (
    <div className="user">
      <div className="userGrid">
        {users.map((user) => {
          return (
            <div className="userCard" key={user.id}>
              <div className="userAvatar">
                <img src={user.avatar} alt="" className="img" />
              </div>
              <div className="userDetails">
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>Email: {user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserGrid;
