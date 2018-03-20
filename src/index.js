import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Router>
            <Route exact path="/" component={Login} />
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
