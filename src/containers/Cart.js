import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getSubtotal, getIVA, getTotal, removeFromCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        subtotal: getSubtotal(state, props),
        iva: getIVA(state, props),
        total: getTotal(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
