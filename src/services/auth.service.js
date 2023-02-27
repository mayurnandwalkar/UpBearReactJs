import api from "./api";
import TokenService from "./token.service";

const register = (data) => {
  return api.post("/auth/signup", data);
};

const login = (data) => {
  return api
    .post("/auth/signin", data)
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;