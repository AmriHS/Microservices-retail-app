import { userConstants } from '../constants/userConstant';
import { userAPI } from '../api/userAPI';
import { history } from '../utility/history';

export const userActions = {
    login,
    logout,
    register
};

function logout() {
    userAPI.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request({ user }));
        userAPI.register(user).then(
                user => {dispatch(
                  success(user));
                  history.push('/login');
                },
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
             history.push('/');             
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
