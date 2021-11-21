import { connect } from 'react-redux';

function Stats({ total }) {
  return <span>{total}</span>;
}

function mapStateToProps(state) {
  if (
    state.contactsApi.queries.fetchContacts &&
    state.contactsApi.queries.fetchContacts.data
  ) {
    console.log(state.contactsApi.queries.fetchContacts.data.length);
    return { total: state.contactsApi.queries.fetchContacts.data.length };
  }

  return;
}

export default connect(mapStateToProps)(Stats);
