const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};

export { getFilter, getAllContacts, getVisibleContacts };
