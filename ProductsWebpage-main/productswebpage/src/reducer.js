import {
  
    ADD_TO_CART_LIST
} from './action'

const initialState = {

    cartCount: 0,
    cartList: []
}

function reducer(state = initialState, action){
    switch(action.type){
       
        case ADD_TO_CART_LIST:
            return {
                ...state,
                cartCount: state.cartCount + 1
            }
        default:
            return state
    }
}

export default reducer