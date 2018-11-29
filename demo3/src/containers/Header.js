import Header from "../components/Header"
import {connect} from "react-redux"

const mapStateProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
export default connect(mapStateProps)(Header)
