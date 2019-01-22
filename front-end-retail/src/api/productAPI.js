import axios from 'axios';

export const productAPI = {
    //getAll,
    get,
    add,
    //update,
    delete: _delete
};

const instance = axios.create({baseURL: 'http://localhost:8080'})

// implement
function getAll(){
  // pagination
}

function get(productId){
  return instance.get('/product/${productId}');
}

function add(product){
  return instance.post('/product', product);
}

function _delete(productId){
  return instance.delete('/product/${productId}');
}
