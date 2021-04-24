import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { getUser } from '../ducks/navbar';

const mapStateToProps = (state, props) => {
    return {
        user: getUser(state, props)
    }
}

export default connect(mapStateToProps)(Navbar);

