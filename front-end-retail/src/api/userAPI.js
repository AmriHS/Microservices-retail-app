import axios from 'axios';

export const userAPI = {
    register,
    login,
    logout
};

const instance = axios.create({baseURL: 'http://localhost:7070'})

// Http client for registeration
function register(user){
  return instance.post('/user/register', {user: user});
}

// Http client for login
function login(username, password) {
  return instance.post('/user/login', {
      username: username,
      password: password
      }).then(function (user) {
        console.log(user);
        localStorage.setItem('user', user);
        return user;
      }).catch(function(err){
        return err;
      });
}

function logout(){
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
