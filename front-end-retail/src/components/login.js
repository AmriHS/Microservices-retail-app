import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'

class Login extends Component {
  constructor (props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  onSubmit(e){
    e.preventDefault();

  //this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password)
      dispatch(userActions.login(username, password));
  }

  onChange(e){

  }

  render() {
    const { username, password} = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form name="form" onSubmit={this.onSubmit}>
                <div className={'form-group' + (!username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} />
                    {!username &&
                            <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (!password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.onChange} />
                        {!password &&
                            <div className="help-block">Password is required</div>
                        }
                </div>
                <div className="form-group">
                       <button className="btn btn-primary">Login</button>
                </div>
                <Link to="/register" className="btn btn-link">Register</Link>
            </form>
      </div>
    );
  }
}

export default Login;
