import React, { createContext, useReducer } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Services from './../components/Services';

const initialState = { 
  "settings": {
    "updateUsing": 0
  }
}

const MyBusContext = createContext({});

const actions = {
  action1(state, action) {
    let newState = state;
    newState.settings.updateUsing = action.payload;
    console.log(newState);
    return {
      ...newState
    }
  },
  action2() {
    console.log('test2');
    return {
      ...state
    }
  }
}

export const MyBusProvider = (props) => {

  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyBusContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyBusContext.Provider>
  )

}

export default MyBusContext;