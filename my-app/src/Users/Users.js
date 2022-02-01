import * as React from "react";
import "../Users/Users.css";

const Users = (props) => {
  return (
    <>
      {props.users.map((user) => {
        return (
          <>
            <p className="name">{user.name}</p>
            <img className="photo" src={user.avatar} />
          </>
        );
      })}
    </>
  );
};
export default Users;
