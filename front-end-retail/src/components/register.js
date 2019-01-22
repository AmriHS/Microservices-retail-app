import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {userActions} from '../actions/userActions'
import Login from './login'

class Register extends Component {
  constructor (props){
      super(props);
      this.state = {
            user: {
                username: '',
                firstName: '',
                lastName: '',
                password: ''
            },
            submitted: false
        };
  }

  // when user submit the form
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.username && user.password)
        dispatch(userActions.register(user));
  }

  // when user type
  onChange = (e) => {
     const { name, value } = e.target;
     const { user } = this.state;
     this.setState({
          user: {
              ...user,
              [name]: value
          }
      });
  }

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.onSubmit}>
                  <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" name="username" value={user.username} onChange={this.onChange} />
                      {submitted && !user.username &&
                          <div className="help-block">Username is required</div>
                      }
                  </div>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.onChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.onChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.onChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                           <button className="btn btn-primary">Register</button>
                    </div>
                    <Link to="/login" className="btn btn-link">Login</Link>
                </form>
                <Route path="/login" component={Login} />
            </div>
    );
  }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(Register)
