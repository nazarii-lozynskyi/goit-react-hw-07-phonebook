import Contacts from './components/Contacts';
import Form from './components/Form/Form';
import Header from './components/Header';
import SearchContactForm from './components/SearchContactForm';

import { Container } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ items, addContact }) {
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

        <Contacts />
      </Container>
    </>
  );
}

export default App;
