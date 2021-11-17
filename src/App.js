import { connect } from 'react-redux';
import actions from './redux/phonebook/phonebook-actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contacts from './components/Contacts';
import Form from './components/Form/Form';
import Header from './components/Header';
import SearchContactForm from './components/SearchContactForm';

import { Container } from '@mui/material';

function App({ items, filter, addContact, deleteContact, onChangeFilter }) {
  const searchContact = value => {
    return items.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(value);
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={addContact} />

        <SearchContactForm />

        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
        />

        {filter === '' ? (
          <Contacts contacts={items} deleteContact={deleteContact} />
        ) : (
          <Contacts contacts={searchContact(filter)} />
        )}
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: value => dispatch(actions.addContact(value)),
  deleteContact: value => dispatch(actions.deleteContact(value)),
  changeFilter: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
