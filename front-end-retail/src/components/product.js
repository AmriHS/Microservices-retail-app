import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { productActions } from '../actions/productActions';

class Product extends React.Component {

    oneUpdate(id) {
        // TODO:
    }
    oneAdd(id) {
      // TODO:
    }
    oneDelete(id) {
        // TODO:
    }
    oneDelete(id) {
        // TODO:
    }

    render() {
        const { product, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(Product);
