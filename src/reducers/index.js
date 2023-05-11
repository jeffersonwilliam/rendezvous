import { combineReducers } from '@reduxjs/toolkit';

import ModalReducer from './modalReducer';

const rootReducer = combineReducers({
  modal: ModalReducer,
});

export default rootReducer;
