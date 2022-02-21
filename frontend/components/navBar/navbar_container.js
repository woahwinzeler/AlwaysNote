import { connect } from "react-redux";
import { logoutCurrentUser } from "../../actions/session_actions";
import NavBar from "./navbar";


const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
})

const NavBarContainer = connect(null, mDTP)(NavBar); 

export default NavBarContainer;