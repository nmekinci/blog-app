import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

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

        // Swal.fire(
        //   'The Internet?',
        //   'That thing is still around?',
        //   'question'
        // )


    } catch (error) {
        console.log(error);
    }
   
  };

  const values = {
    createUser
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
