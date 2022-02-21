import { connect } from "react-redux";
import NavBar from "./navbar";


const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
})

const NavBarContainer = connect(null, mDTP)(NavBar); 

export default NavBarContainer;