import { useDispatch, useSelector } from 'react-redux';

import actions from 'redux/phonebook/phonebook-actions';

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

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

function Contacts() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter)
  );
  const dispatch = useDispatch();

  return (
    <>
      <List sx={{ bgcolor: 'background.paper' }} className={styles.list}>
        {contacts.map(({ id, name, number }) => (
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
              onClick={() => dispatch(actions.deleteContact(id))}
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
