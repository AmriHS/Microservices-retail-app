import { userConstants } from '../constants/userConstant';

console.log("localStorage:"+localStorage.getItem('user'))

let user = JSON.parse(JSON.stringify(localStorage.getItem('user')));

const initState = user ? { loggedIn: true, user } : {};

export function authentication(state = initState, action) {
  switch (action.type) {
      case userConstants.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
      case userConstants.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case userConstants.LOGIN_FAILURE:
        return {};
      case userConstants.LOGOUT:
        return {};
      default:
        return state;
  }
}
