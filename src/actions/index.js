import axios from 'axios';

export const ActionTypes = {
  SET_BOOLEAN: 'SET_BOOLEAN',
  SET_VIEW: 'SET_VIEW',
};

export const setBoolean = (value) => ({
  type: 'SET_BOOLEAN',
  payload: value,
});

export const setView = (value) => ({
  type: 'SET_VIEW',
  payload: value,
});
