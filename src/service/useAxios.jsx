import { useContext, useReducer } from "react";
import { initialAuthState, reducerAuth } from "../reducer/authReducer";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const useAxios = (state) => {
//   const {state: AuthState} = useContext(AuthContext)
  const { key } = state;
console.log(key);
  const axiosWithKey = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${key}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return { axiosWithKey, axiosPublic };
};

export default useAxios;
