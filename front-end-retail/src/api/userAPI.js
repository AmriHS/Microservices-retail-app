export const userAPI = {
    register,
    login,
    logout/*,
    get,
    update,
    delete*/
};

function register(username, password, email, role){
  const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email, role})
  };
  /*fetch(`/users/authenticate`, requestOptions).then(handleResponse)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      });*/
}

function login(username, password) {
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    var user = [{
       username:"test",
       token:"token"
     }];
     localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function logout(){
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
