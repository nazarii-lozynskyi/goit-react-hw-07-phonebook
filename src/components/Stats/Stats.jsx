import { connect } from 'react-redux';

function Stats({ total }) {
  return <span>{total}</span>;
}

const mapStateToProps = state => ({
  total: 3,

  //total: state.contactsApi.queries.fetchContacts.data.length,
});

export default connect(mapStateToProps)(Stats);
