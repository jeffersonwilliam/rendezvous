import { enableAllPlugins, produce } from 'immer';
import { ActionTypes } from '../actions';

enableAllPlugins();

// const initialState = {
//   all: [],
//   current: {},
// };

const initialState = { currentView: 'details' };

const ViewReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_VIEW:
      draftState.currentView = action.payload;
      break;
  }
}, initialState);

export default ViewReducer;
