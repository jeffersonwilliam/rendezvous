import { combineReducers } from '@reduxjs/toolkit';

import ModalReducer from './modalReducer';
import ViewReducer from './viewReducer';

const rootReducer = combineReducers({
  modal: ModalReducer,
  view: ViewReducer,
});

export default rootReducer;
