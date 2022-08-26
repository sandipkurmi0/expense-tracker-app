import { LOGIN_SUCCESS, LOGIN_REMOVE_TOKEN, LOGIN_LOADING } from "./constants";

const inititalStatus = {
  token: null,
  user: {},
};

export function authReducer(state = inititalStatus, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.data,
      };
    case LOGIN_REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        user: {},
      };
    default:
      return false;
  }
}
