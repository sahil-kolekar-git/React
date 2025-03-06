import React, { useContext } from "react";
import userContext from "../Context/UserContext";
const Profile = () => {
  let { data } = useContext(userContext);
  console.log(data);

  return (
    <div>
      <h2>Username :{data.userName}</h2>
      <h2>Password :{data.password}</h2>
    </div>
  );
};

export default Profile;
