import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import Register from './register'

class Login extends Component {
  constructor (props){
    super(props);
    console.log('Login constructor')

    // reset
    this.props.dispatch(userActions.logout());

    this.state = {
      username:'',
      password:'',
      submitted:false
    };

  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password)
      dispatch(userActions.login(username, password));
  }

  onChange = (e) =>{
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted} = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form name="form" onSubmit={this.onSubmit}>
                <div className={'form-group' + (!username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} />
                    {!username && submitted &&
                            <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (!password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} />
                        {!password && submitted &&
                            <div className="help-block">Password is required</div>
                        }
                </div>
                <div className="form-group">
                       <button className="btn btn-primary">Login</button>
                       <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
            <Route path="/register" component={Register} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    console.log("CURRENT STATE: "+loggingIn);
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
