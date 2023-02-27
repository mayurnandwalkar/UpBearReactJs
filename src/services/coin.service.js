import api from "./api";

const getCoinsDetails = () => {
  return api.get("/getCoinsDetails");
};
const setCoinsDetails = () => {
  return api.get("/setCoinsDetails");
};


const CoinService = {
  setCoinsDetails,
  getCoinsDetails
};

export default CoinService;