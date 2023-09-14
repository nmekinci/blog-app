import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { initialAuthState, reducerAuth } from "../reducer/authReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerAuth, initialAuthState);

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = sessionStorage.getItem(
      "Blog-app-savedCurrentUser"
    );
    return savedCurrentUser
      ? JSON.parse(savedCurrentUser)
      : {
          key: "",
          user: {},
          loading: false,
          error: "",
        };
  });

  const url = process.env.REACT_APP_BASE_URL;

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
    sessionStorage.setItem(
      "Blog-app-savedCurrentUser",
      JSON.stringify(currentUser)
    );
    // loginUser(newuser);
    // createUser(newRegisterUser);
    // logoutUser()
  }, [currentUser]);

  const createUser = async (newuser) => {
    // console.log(newuser);
    try {
      const { data } = await axios.post(`${url}users/register/`, newuser);
      // console.log(data);
      // loginUser({username:newUser?.username,email: newUser?.email, password: newUser?.password })
      const LoginData = {
        username: newuser.username,
        email: newuser.email,
        password: newuser.password,
      };
      loginUser(LoginData);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (user) => {
    dispatch({ type: "START" });
    try {
      const { data } = await axios.post(`${url}users/auth/login/`, user);
      dispatch({ type: "SUCCESS", payload: data });
      // console.log(data);
      // console.log(state);
      setCurrentUser(data);
      Swal.fire(`${data?.user?.username}`, "Logged in succesfully", "question");
      // console.log(state);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(state);
  const logoutUser = async () => {
    try {
      const { data } = await axios.post(`${url}users/auth/logout/`);
      // console.log(data);
      // currentUser?.key ? Swal.fire("Logged Out succesfully") : null;
      if (currentUser?.key != ""){
        Swal.fire("Logged Out succesfully")
      }
      setCurrentUser({
        key: "",
        user: {},
        loading: false,
        error: "",
      });
      // Swal.fire("Logged Out succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(currentUser);
  const values = {
    createUser,
    loginUser,
    logoutUser,
    currentUser,
    state,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
