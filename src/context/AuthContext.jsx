import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const url = process.env.REACT_APP_BASE_URL

  const newuser = {
    username: "pc117",
    email: "nm.ekinci@gmail.com",
    password: "654654Me.",
  };
  const newRegisterUser = {
    username: "118",
    first_name: "118",
    last_name: "pc",
    email: "118@gmail.com",
    image: "",
    bio: "",
    password: "654654Me.",
    password2: "654654Me.",
  };

  useEffect(() => {
    // loginUser(newuser);
    // createUser(newRegisterUser);
    logoutUser()
  }, []);

  const createUser = async ( newuser ) => {
    try {
      const { data } = await axios.post(`${url}users/register/`, newuser);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (user) => {
    try {
      const { data } = await axios.post(`${url}users/auth/login/`, user);
      console.log(data);

      // Swal.fire(
      //   'User Name',
      //   'Logged in succesfully',
      //   'question'
      // )
    } catch (error) {
      console.log(error);
    }
  };
  const logoutUser = async () => {
    try {
      const { data } = await axios.post(`${url}users/auth/logout/`);
      console.log(data);

      // Swal.fire(
      //   'User Name',
      //   'Logged in succesfully',
      //   'question'
      // )
    } catch (error) {
      console.log(error);
    }
  };



  const values = {
    createUser,
    loginUser,
    logoutUser
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
