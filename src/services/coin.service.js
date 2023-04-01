import api from "./api";

const getCoinsDetails = () => {
  return api.get("/getCoinsDetails");
};
const setCoinsDetails = () => {
  return api.get("/setCoinsDetails");
};
const addFavCoins = (data) => {
  return api.post("/addFavCoins",data);
};
const getFavCoins = (data) => {
  return api.post("/getFavCoins",data);
};


const CoinService = {
  setCoinsDetails,
  getCoinsDetails,
  addFavCoins,
  getFavCoins
};

export default CoinService;