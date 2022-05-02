import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import TableData from "./TableData";

export default function Home() {
  const Navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { addData } = context;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addData(user.email, user.password);
    Navigate("/table");
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}
