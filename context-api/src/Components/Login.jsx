import React, { useContext, useState } from "react";
import userContext from "../Context/UserContext";
const Login = () => {
  let [formData, setFormData] = useState({ userName: "", password: "" });
  let { setData } = useContext(userContext);

  let { userName, password } = formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter username"
        value={userName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
