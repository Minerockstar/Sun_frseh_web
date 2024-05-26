// store.js
import { createStore } from 'redux'; // Import createStore from 'redux'

// Initial state
const initialState = {
  currentRoute: '/'
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ROUTE':
      return {
        ...state,
        currentRoute: action.payload
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
