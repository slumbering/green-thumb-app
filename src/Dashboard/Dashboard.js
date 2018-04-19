import React, { Component } from 'react';
import { Container, Button, Icon, Grid } from 'semantic-ui-react';
import { connect, Provider } from 'react-redux';
import DashboardItemList from './DashboardItemList';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container textAlign='center'>
                <DashboardItemList/>
                <Button icon labelPosition='right' onClick={() => {console.log('add a plant !')}}>
                    Ajouter une plante toto
                    <Icon name='plus' />
                </Button>
            </Container>
            </div>
        )
    }
}

const addItemActionCreator = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item
    }
  }
  
  const editItemActionCreator = (item) => {
    return {
      type: 'EDIT_ITEM',
      payload: item
    }
  }
  
  // Construire ces méthodes en dehors de la class
  const mapStateToProps = (state) => {
    return {
      items: state.items
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => {
            dispatch(addItemActionCreator(item));
        },
        editItem: (item) => {
            dispatch(editItemActionCreator(item));            
        }
    }
  }

// export default Dashboard;

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);