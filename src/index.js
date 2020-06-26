import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import CartReducer from './components/reducers/cartReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(CartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

