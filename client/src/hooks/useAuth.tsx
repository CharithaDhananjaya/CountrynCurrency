import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

interface IAuthUser {
  firstName: string;
  lastName: string;
  message: string;
  token: string;
  userId: string;
  validity: number;
}

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: IAuthUser) => {
    setUser(data);
    navigate("/user");
  };

  // call this function to sign out logged in user
  const logout: () => void = async () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  // //const value;
  // const value = useMemo(
  //   () => ({
  //     user,
  //     login,
  //     logout,
  //   }),
  //   [user]
  // );
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
