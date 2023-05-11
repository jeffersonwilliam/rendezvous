import { enableAllPlugins, produce } from 'immer';
import { ActionTypes } from '../actions';

enableAllPlugins();

// const initialState = {
//   all: [],
//   current: {},
// };

const initialState = { currentState: false };

const ModalReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_BOOLEAN:
      draftState.currentState = action.payload;
      break;
  }
}, initialState);

export default ModalReducer;
