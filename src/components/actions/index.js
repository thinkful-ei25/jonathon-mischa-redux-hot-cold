
export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = newFeedback => ({
  type: UPDATE_FEEDBACK,
  newFeedback
});

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnser = answer => ({
  type: CORRECT_ANSWER,
  answer
})

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = reset => ({
  type: RESTART_GAME,
  reset
})

