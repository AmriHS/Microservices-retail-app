import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import Product from './product';

import {PrivateRoute} from '../utility/privateRoute'
import {history} from '../utility/history'


class App extends Component {
  constructor(props){
    super(props);
    const { dispatch } = this.props;

  }
  render() {
    return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                               <PrivateRoute exact path="/" component={Product} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
    );
  }
}

export default App;
