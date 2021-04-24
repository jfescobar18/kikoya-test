import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { formatMoney } from '../../helpers';

const Cart = ({ items, subtotal, iva, total, currency, removeFromCart }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}

                        {items.length != 0 && (
                            <div>
                                <div className="cart__subtotal">Subtotal: {formatMoney(subtotal)} {currency}</div>
                                <div className="cart__iva">IVA (16%): {formatMoney(iva)} {currency}</div>
                                <div className="cart__total">Total: {formatMoney(total)} {currency}</div>

                                <NavLink className="btn btn-success btn-lg" to="/summary" exact>
                                    Payment
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    subtotal: PropTypes.number,
    iva: PropTypes.number,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
