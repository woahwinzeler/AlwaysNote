import { connect } from "react-redux";
import { logoutCurrentUser } from "../../../actions/session_actions";
import  UserSymbol from './user_symbol'

const mSTP = state => {
  console.log(state, 'mSTP')
  return {
    state
  }
}
const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser())
})

export default connect(mSTP, mDTP)(UserSymbol); 