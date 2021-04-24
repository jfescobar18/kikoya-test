import React from 'react';
import Navbar from '../../containers/Navbar';
import { formatMoney } from '../../helpers';

const Summary = ({ items, subtotal, iva, total, currency }) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-7 col-lg-7">
                        <h1 className="summary__title">Summary</h1>
                        {items.map(item => (
                            <ul className="media-list main-list">
                                <li className="media">
                                    <a className="pull-left" href="#">
                                        <img className="media-object summary__image" src={item.image} alt="..." />
                                    </a>
                                    <div className="media-body">
                                        <h4 className="media-heading">{item.name}</h4>
                                        <p className="price">{formatMoney(item.price)} {currency}</p>
                                    </div>
                                </li>
                            </ul>
                        ))}

                        <div className="summary__total">
                            <div className="cart__subtotal">Subtotal: {formatMoney(subtotal)} {currency}</div>
                            <div className="cart__iva">IVA (16%): {formatMoney(iva)} {currency}</div>
                            <div className="cart__total">Total: {formatMoney(total)} {currency}</div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    );
}

export default Summary;
