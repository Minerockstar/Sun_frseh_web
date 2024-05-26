// actions.js
import { TOGGLE_ANIMATION } from './actionTypes';

export const toggleAnimation = (animate) => ({
  type: TOGGLE_ANIMATION,
  payload: animate,
});
