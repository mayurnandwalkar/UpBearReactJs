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

const resetpassword = (data) => {
  return api
    .post("/auth/resetpassword", data)
    .then((response) => {
      return response.data;
    });
};

const verify_rp_token = (data) => {
  return api
    .post("/auth/verify_rp_token", data)
    .then((response) => {
      return response.data;
    });
};

const newpassword = (data) => {
  return api
    .post("/auth/newpassword", data)
    .then((response) => {
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
  resetpassword,
  verify_rp_token,
  newpassword
};

export default AuthService;