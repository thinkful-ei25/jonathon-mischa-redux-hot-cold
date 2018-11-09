import {ADD_GUESS, UPDATE_FEEDBACK} from '../actions/index';

const initialState = {
  guesses: []
}

export const updateState = (state=initialState, action) => {
  if(action.type === ADD_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    })
  }
}