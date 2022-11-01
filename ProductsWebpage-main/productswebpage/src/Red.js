import React from 'react'

const initialState = {
    count: 0
}

function reducer(state, action){

    switch(action.type){
        case 'increment':
            return {count :state.count+1}
        default:
            return state
    }
}

function Red() {

    const[state, dispatch]  = React.useReducer(reducer, initialState)
  return (
    <div>Red</div>
  )
}

export default Red