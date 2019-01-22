import {userConstants} from '../constants/userConstant';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_PROFILE_REQUEST:
      return {
        // TODO:
      };
    case userConstants.GET_PROFILE_SUCCESS:
      return {
        item: action.user
      };
    case userConstants.GET_PROFILE_FAILURE:
      return {
        error: action.error
      };
    // TODO: other cases
    default:
      return state
  }
}
