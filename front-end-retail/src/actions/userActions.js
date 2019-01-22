import { userConstants } from '../constants/userConstant';
import { userAPI } from '../api/userAPI';

export const userActions = {
    login,
    logout,
    register
    /*get,
    update,
    delete:_delete*/
};

function logout() {
    //userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    console.log("USER NAME: "+user.firstName);
    console.log("USER NAME: "+user.lastName);
    console.log("USER NAME: "+user.password);

    return dispatch => {
        dispatch(request({ user }));
        userAPI.register(user).then(
                user => {dispatch(success(user));},
                error => {dispatch(failure(error));}
            );
    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userAPI.login(username, password).then(
           user => {
             dispatch(success(user));
           },
           error => {
             dispatch(failure(error));
           }
        );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
