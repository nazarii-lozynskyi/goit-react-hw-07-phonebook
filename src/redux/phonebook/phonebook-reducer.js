import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phonebook-actions';
import { toast } from 'react-toastify';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const contacts =
  JSON.parse(localStorage.getItem('Contacts')) ?? initialState.contacts.items;

const add = (state, action) => {
  const checkForDuplicationOfContacts = state.find(
    contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
  );

  if (checkForDuplicationOfContacts) {
    toast.error(`${action.payload.name} is already in contacts`);

    return state;
  }
  const addContacts = [...state, action.payload];
  //window.localStorage.setItem("Contacts", JSON.stringify(addContacts));
  return addContacts;
};

const del = (state, action) => {
  const deleteContacts = [
    ...state.filter(contact => contact.id !== action.payload),
  ];
  //window.localStorage.setItem("Contacts", JSON.stringify(deleteContacts));
  return deleteContacts;
};

const items = createReducer(contacts, {
  [phoneBookActions.addContact]: add,
  [phoneBookActions.deleteContact]: del,
});

const filter = createReducer('', {
  [phoneBookActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  error,
  loading,
});
