import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from './types';

// Add Contact
export const addContact = (contact) => (dispatch) => {
  contact.id = uuidv4();
  dispatch({ type: ADD_CONTACT, payload: contact });
};

// Delete Contact
export const deleteContact = (id) => (dispatch) => {
  dispatch({ type: DELETE_CONTACT, payload: id });
};

// Set current Contact
export const setCurrent = (contact) => (dispatch) => {
  dispatch({ type: SET_CURRENT, payload: contact });
};

// Clear current  Contact
export const clearCurrent = () => (dispatch) => {
  dispatch({ type: CLEAR_CURRENT });
};

// Update Contact
export const updateContact = (contact) => (dispatch) => {
  dispatch({ type: UPDATE_CONTACT, payload: contact });
};
