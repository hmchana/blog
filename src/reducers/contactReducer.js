import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from '../actions/types';

const initialSate = {
  contacts: [
    {
      id: 1,
      name: 'Jill Johnson',
      email: 'jill@gmail.com',
      phone: '111-111-11111',
    },
    {
      id: 2,
      name: 'Sara Watsson',
      email: 'sara@gmail.com',
      phone: '222-222-2222',
    },
    {
      id: 3,
      name: 'Harry White',
      email: 'harry@gmail.com',
      phone: '333-333-3333',
    },
  ],
  current: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => action.payload !== contact.id
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    default:
      return state;
  }
};
