const getFilter = state => state.rootReducer.contacts.filter;

const getAllContacts = state => state.rootReducer.contacts.items;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};

export { getFilter, getAllContacts, getVisibleContacts };
