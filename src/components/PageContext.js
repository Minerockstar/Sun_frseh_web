// reducers.js
import { CHANGE_BACKGROUND_IMAGE, TOGGLE_ANIMATION } from './actionTypes';

const initialState = {
  backgroundIndex: 0,
  animate: false, // New property to manage animation state
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundIndex: action.payload,
      };
    case TOGGLE_ANIMATION:
      return {
        ...state,
        animate: action.payload,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
