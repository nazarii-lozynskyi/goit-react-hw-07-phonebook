import { connect } from "react-redux";

function Stats({ total }) {
  return <span>{total}</span>;
}

const mapStateToProps = (state) => ({ total: state.contacts.items.length });

export default connect(mapStateToProps)(Stats);
