import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginRequest, logoutRequest, getId, getUsername, getRole, getPermissions, getToken } from '../ducks/login';

const mapStateToProps = (state, props) => {
    return {
        id: getId(state, props),
        username: getUsername(state, props),
        role: getRole(state, props),
        permissions: getPermissions(state, props),
        token: getToken(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    logoutRequest: (id) => dispatch(logoutRequest(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
