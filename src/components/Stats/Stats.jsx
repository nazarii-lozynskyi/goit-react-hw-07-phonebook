import { connect } from 'react-redux';

function Stats({ total }) {
  return <span>{total}</span>;
}

function mapStateToProps(state) {
  console.log(state.contactsApi.queries.fetchContacts.data.length);

  if (
    state.contactsApi.queries.fetchContacts &&
    state.contactsApi.queries.fetchContacts.data
  ) {
    console.log(state.contactsApi.queries.fetchContacts.data.length);
    return { total: state.contactsApi.queries.fetchContacts.data.length };
  }

  return { total: state.contactsApi.queries.fetchContacts.data.length };
}

export default connect(mapStateToProps)(Stats);
