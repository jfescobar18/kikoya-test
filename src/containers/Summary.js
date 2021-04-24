import { connect } from 'react-redux';
import Summary from '../components/Summary';
import { getItems, getCurrency, getSubtotal, getIVA, getTotal } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        subtotal: getSubtotal(state, props),
        iva: getIVA(state, props),
        total: getTotal(state, props)
    }
}

export default connect(mapStateToProps)(Summary);

