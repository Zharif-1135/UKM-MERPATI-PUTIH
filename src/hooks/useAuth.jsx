import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook ini adalah cara singkat untuk mengakses AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;