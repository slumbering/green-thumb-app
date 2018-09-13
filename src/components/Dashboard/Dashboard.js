import React, { Component } from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DashboardItemList from './DashboardItemList';
import DashboardItemAdd from './DashboardItemAdd';
import requireAuth from '../requireAuth';

class Dashboard extends Component {

    state = {
        requestNewItem: false
    }

    addNewItem = () => {
        this.setState({
            requestNewItem: true
        })
    }

    render() {
        {console.log(this.props.authentication)}
        return (
            <div>
                <Container textAlign='center'>
                    <DashboardItemList/>
                    { this.state.requestNewItem &&
                        <DashboardItemAdd addItem={this.props.addItem}/>
                    }
                    <Button icon labelPosition='right' onClick={this.addNewItem}>
                        Ajouter une plante
                        <Icon name='plus' />
                    </Button>
                </Container>
            </div>
        )
    }
}

// Construire ces méthodes en dehors de la class
const mapStateToProps = (state) => {
    const { authentication } = state.authentication;
    
    return {
        authentication
    };
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
// export default Dashboard;

export default connect(mapStateToProps)(requireAuth(Dashboard));