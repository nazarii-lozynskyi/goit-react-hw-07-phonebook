import { useSelector } from 'react-redux';

import { getFilter } from 'redux/phonebook/phonebook-selectors.js';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/phonebook/phonebook-slice.js';

import { AccountBox, Delete } from '@mui/icons-material';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import styles from './Contact.module.css';

function Contacts() {
  const filter = useSelector(getFilter);

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  };

  const { data: contacts } = useFetchContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <List sx={{ bgcolor: 'background.paper' }} className={styles.list}>
        {contacts &&
          getVisibleContacts(contacts, filter)?.map(({ id, name, number }) => (
            <ListItem
              sx={{
                borderColor: 'primary.main',
                border: 1,
                borderRadius: 2,
              }}
              className={styles.item}
              key={id}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.dark' }}>
                  <AccountBox />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
              <IconButton
                type="button"
                edge="end"
                aria-label="delete"
                sx={{ marginLeft: '40px' }}
                onClick={() => deleteContact(id)}
                id={id}
              >
                <Delete sx={{ color: 'error.main' }} />
              </IconButton>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default Contacts;
