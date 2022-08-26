import { LOGIN_SUCCESS, LOGIN_REMOVE_TOKEN } from "./constants";
import { __login } from "./services";

export function setLoginToken(params) {
  return {
    type: LOGIN_SUCCESS,
    payload: params,
  };
}

export function userLogout() {
  return {
    type: LOGIN_REMOVE_TOKEN,
  };
}

export const login = (formData) => (dispatch) => {
  console.log(formData);
  return new Promise((resolve, reject) => {
    __login(formData)
      .then(async (response) => {
        console.log(response);
        dispatch(setLoginToken(response));
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(userLogout());
  });
};
