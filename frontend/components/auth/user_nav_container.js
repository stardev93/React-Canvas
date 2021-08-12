import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserNav from './UserNav';
import { createDesign } from '../../actions/design_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createDesign: (design) => dispatch(createDesign(design)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
