import React, {Component} from 'react';
import { connect } from 'react-redux';
import { history } from '../helpers';

export default ChildComponent => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            var currentUser = localStorage.getItem('user-token');
            if(!currentUser) {
                history.push('/');
            }
        }

        render() {
            // ...this.props permet de transmettre toutes les props des parents (router, connect) 
            // et ainsi de les utiliser dans les composants enfant.
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authentication: state.authentication }
    }

    return connect(mapStateToProps)(ComposedComponent);
};

