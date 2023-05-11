import axios from 'axios';

export const ActionTypes = {
  SET_BOOLEAN: 'SET_BOOLEAN',
};

export const setBoolean = (value) => ({
  type: 'SET_BOOLEAN',
  payload: value,
});
