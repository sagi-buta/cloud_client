import React, { useContext } from "react";
import { useJwt } from "react-jwt";
import apiCalls from "../../functions/apiCalls";
import { DataContext } from "../../context";

export default function Login() {
  const context = useContext(DataContext);

  async function login(e) {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const res = await apiCalls.post(`users/login`, {
        email: email,
        password: password,
      });
      console.log("res", res);
      if (res.data.token) {
        // localStorage.token = res.data.token;
        context.setUser(res.data.userResolt);
        await context.setActiveUrl([res.data.userResolt._id]);
        console.log(context.activeUrl);
      }
    } catch (error) {
      console.log(error.message || error);
      if (error.statusCode != "200") {
        // localStorage.removeItem("token");
        context.setUser(false);
      }
    }
  }
  return (
    <form onSubmit={(e) => login(e)}>
      <h2>log in</h2>
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="password" />
      <button type="submit">log in</button>
    </form>
  );
}
