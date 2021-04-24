import React from 'react';
import Home from './components/Home/Home';
import Login from './containers/Login';
import Summary from './containers/Summary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { history } from './helpers';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log('Listening');
        });
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/summary" component={Summary} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
