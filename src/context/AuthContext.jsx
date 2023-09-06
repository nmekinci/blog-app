import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const BASE_URL = "http://30117.fullstack.clarusway.com/";
  const newuser = {
    username: "pc117",
    email: "nm.ekinci@gmail.com",
    password: "654654Me."
  };

  useEffect(() => {
    loginUser(newuser);
  }, []);

 
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newuser),
//   };

  const createUser = async ({ newuser }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, newuser);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (newuser) => {
    try {
        const {data} = await axios.post(`${BASE_URL}users/auth/login/`, newuser)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    // fetch(`${BASE_URL}users/auth/login/`, requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  };

  const values = {
    createUser
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
