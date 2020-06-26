import item1 from '../../images/1.jpg';
import item2 from '../../images/2.jpg';
import item3 from '../../images/33.jpg';
import item4 from '../../images/24.jpg';
import item5 from '../../images/15.jpg';
import item6 from '../../images/13.jpg';

import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from '../action/cartAction'

const initialState = {
    items : [
        {id:1,title:'Anime Collection 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1450 ,img:item1},

        {id:2,title:'Manga Collection 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1650 ,img: item2},

        {id:3,title:'Anime Stream 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:2500 ,img: item3},

        {id:4,title:'Series Collection 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2800 ,img:item4},

        {id:5,title:'Movie Collection 5', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1900,img: item5},

        {id:6,title:'Manga Stram 6', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:3950,img: item6}

    ],
    addedItems : [],
    total : 0
}

const CartReducer = (state = initialState, action) => {

    if(action.type === ADD_TO_CART) {
        
        const addedItem = state.items.find(item => action.id === item.id);
        const existingItem = state.addedItems.find(item => action.id === item.id);

        if(existingItem) {
            addedItem.quantity+=1;
            return {
                ...state,
                total : state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            return {
                ...state,
                addedItems : [...state.addedItems, addedItem],
                total : state.total + addedItem.price
            }
        }

    }

    if(action.type === REMOVE_FROM_CART) {

        const selectedItem = state.addedItems.find(item => action.id === item.id);
        const newItems = state.addedItems.filter(item => item.id !== action.id);

        const newTotal = state.total - (selectedItem.quantity * selectedItem.price);
        console.log(newTotal);

        return {
            ...state,
            addedItems : newItems,
            total : newTotal
        }

    }

    if(action.type === ADD_QUANTITY) {

        const addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity+=1;

        return{
            ...state,
            total : state.total + addedItem.price
        }

    }

    if (action.type === SUB_QUANTITY) {
        const addedItem = state.addedItems.find(item => action.id === item.id);
        const newItems = state.addedItems.filter(item => item.id !== action.id);

        if(addedItem.quantity === 1) {
            const newTotal = state.total - addedItem.price;

            return {
                ...state,
                addedItems : newItems,           
                total : newTotal
            }
        } else {

            addedItem.quantity-=1;
            return {
                ...state,
                total : state.total - addedItem.price
            }

        }

    } if(action.type === ADD_SHIPPING) {
        
        return {
            ...state,
            total: state.total + 6
        }

    }

    if(action.type === SUB_SHIPPING) {
        return {
            ...state,
            total : state.total - 6
        }
    }

        return state;

}

export default CartReducer;