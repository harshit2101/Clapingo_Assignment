import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function handleSubmit(event) {
    event.preventDefault();

    const existingUser = users.find((users) => users.userId === userId && users.password===password);
    if (existingUser) {
      navigate("/login/loggedIn");
    } else {
      const newUser = { userId, password };

      setUsers((prevUsers) => [...prevUsers, newUser]);

      setUserId("");
      setPassword("");
    }
  }

  return (
    <div className="w-full h-fit my-20 font-poppins select-none">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-300/90 px-10 py-20"
        >
          <h2 className="text-4xl font-bold text-center pb-4 mb-10 border-b-2">
            LogIn
          </h2>

          <div className="flex flex-col my-5">
            <label className="font-bold">UserID</label>
            <input
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              className="border relative rounded-md bg-gray-100 p-2"
              type="text"
              placeholder="Enter UserID"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border relative rounded-md bg-gray-100 p-2"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <button className="w-full hover:scale-105 py-1 rounded-2xl mt-8 bg-gradient-to-r from-[#52A49A] to-[#00CDAC] relative  text-white">
            <div className="text-[25px]">LogIn</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
