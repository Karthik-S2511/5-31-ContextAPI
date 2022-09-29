import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
 switch (action.type) {
  case 'INCREMENT': {
   return { ...state, counter: state.counter + 1 }
  }
  case 'DECREMENT': {
   if (state.counter > 0) return { ...state, counter: state.counter - 1 }
  }
  default: {
   return state
  }
 }
}

const UseRed = () => {
 const [count, setCount] = useState(0)
 const [state, dispatch] = useReducer(reducer, { counter: 0 })

 return (
  <div>
   <div>
    <b> useState Counter :</b> {count}
    <div>
     <button onClick={() => setCount(count + 1)}>+</button>
     <button
      onClick={() => {
       if (count > 0) setCount(count - 1)
      }}
     >
      -
     </button>
    </div>
   </div>

   <hr></hr>

   <div>
    <b>useReducer Counter : </b> {state.counter}
    <div>
     <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
     <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
   </div>
  </div>
 )
}

export default UseRed
