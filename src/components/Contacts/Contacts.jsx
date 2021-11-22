import * as React from 'react';
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
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './Contact.module.css';
import './Contacts.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

  // --- Snackbar  /
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <List sx={{ bgcolor: 'background.paper' }} className={styles.list}>
        <TransitionGroup>
          {contacts &&
            getVisibleContacts(contacts, filter)?.map(
              ({ id, name, number }) => (
                <CSSTransition key={id} timeout={500} classNames="item">
                  <ListItem
                    sx={{
                      borderColor: 'primary.main',
                      border: 1,
                      borderRadius: 2,
                    }}
                    className={styles.Item}
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
                      onClick={() => {
                        deleteContact(id);
                        handleClick();
                      }}
                      id={id}
                    >
                      <Delete sx={{ color: 'error.main' }} />
                    </IconButton>
                  </ListItem>
                </CSSTransition>
              )
            )}
        </TransitionGroup>
      </List>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Сontact deleted
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contacts;
