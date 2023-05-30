import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initiateState = {
  number: 0,
};

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const counter = handleActions({
  [INCREASE]: (state, action) => ({number: state.number + 1}),
  [DECREASE]: (state, action) => ({number: state.number - 1}),
},initiateState)

export default counter;
