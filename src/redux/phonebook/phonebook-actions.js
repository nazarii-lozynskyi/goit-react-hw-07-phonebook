import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/ChangeFilter');

const phoneBookActions = { addContact, deleteContact, changeFilter };

export default phoneBookActions;
