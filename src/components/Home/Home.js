import React, { Component } from 'react';
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';
import Navbar from '../../containers/Navbar';

class Home extends Component {
    constructor(props) { // Init props and state
        super(props);
    }

    componentDidMount() {
        if (!sessionStorage.getItem('session')) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
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
}

export default Home;
