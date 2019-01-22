import { productConstants } from '../constants/productConstant';
import { productAPI } from '../api/productAPI';

export const productActions = {
  getAll,
  get,
  add,
  update,
  delete: _delete //reserved word
};

function getAll(){
 // TODO:
}


function get(productId) {
    return dispatch => {
        dispatch(request({ productId }));
        productAPI.get(productId).then(
                product => {dispatch(success(productId));},
                error => {dispatch(failure(error));}
        );
    };
    function request(productId) { return { type: productConstants.GET_PRODUCT_REQUEST, productId } }
    function success(productId) { return { type: productConstants.GET_PRODUCT_SUCCESS, productId } }
    function failure(error) { return { type: productConstants.GET_PRODUCT_FAILURE, error } }
}

function add(product) {
    return dispatch => {
        dispatch(request({ product }));
        productAPI.add(product).then(
                product => {dispatch(success(product));},
                error => {dispatch(failure(error));}
        );
    };
    function request(product) { return { type: productConstants.ADD_PRODUCT_REQUEST, product } }
    function success(product) { return { type: productConstants.ADD_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.ADD_PRODUCT_FAILURE, error } }
}

function update(){
  // TODO: 
}

function _delete(productId) {
    return dispatch => {
        dispatch(request({ productId }));
        productAPI.delete(productId).then(
                product => {dispatch(success(productId));},
                error => {dispatch(failure(error));}
        );
    };
    function request(productId) { return { type: productConstants.DELETE_PRODUCT_REQUEST, productId } }
    function success(productId) { return { type: productConstants.DELETE_PRODUCT_SUCCESS, productId } }
    function failure(error) { return { type: productConstants.DELETE_PRODUCT_FAILURE, error } }
}
