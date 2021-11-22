import Contacts from './components/Contacts';
import Form from './components/Form/Form';
import Header from './components/Header';
import SearchContactForm from './components/SearchContactForm';
import Loader from 'components/Loader';
import Skeleton from 'components/Skeleton';

import { useFetchContactsQuery } from './redux/phonebook/phonebook-slice.js';

import { Container } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { data, error, isFetching } = useFetchContactsQuery();

  return (
    <>
      <Header />
      <Container>
        <Form contacts={data} />

        {data && <SearchContactForm />}

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

        {!data && <Skeleton />}

        {data && <Contacts />}

        {isFetching && data && <Loader />}

        {error && <h4>{error}</h4>}
      </Container>
    </>
  );
}

export default App;
