import {ADD_GUESS, UPDATE_FEEDBACK, RESTART_GAME} from '../actions/index';

const initialState = {
  guesses: [],
  feedback: '',
  correctAnswer: Math.floor(Math.random() % 100 + 1)
}

export const updateState = (state=initialState, action) => {
  if(action.type === ADD_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    })
  }
  else if(action.type === UPDATE_FEEDBACK){
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  }
  else if(action.type === RESTART_GAME){
    return Object.assign({}, state,{
      state = {initialState}
    });
  }
}