import { GET_MENUClient } from "./type";
import axios from "axios";

export const getMenufrom = (payload) => {
  return {
    type: GET_MENUClient,
    payload,
  };
};

export const getMenuData = () => {
  return (dispatch) =>
    axios
      .get("http://localhost:8000/menu")
      .then((res) => dispatch(getMenufrom(res.data)));
};
