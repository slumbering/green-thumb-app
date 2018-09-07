import React, { Component } from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DashboardItemList from './DashboardItemList';
import DashboardItemAdd from './DashboardItemAdd';

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

// const addItemActionCreator = (item) => {
//     return {
//       type: 'ADD_ITEM',
//       payload: item
//     }
//   }
  
//   const editItemActionCreator = (item) => {
//     return {
//       type: 'EDIT_ITEM',
//       payload: item
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem: (item) => {
//             dispatch(addItemActionCreator(item));
//         },
//         editItem: (item) => {
//             dispatch(editItemActionCreator(item));            
//         }
//     }
//   }

// Construire ces méthodes en dehors de la class
const mapStateToProps = (state) => {
    const { alert, itemsReducer } = state;
    
    return {
        alert,
        itemsReducer
    };
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
// export default Dashboard;

export default connect(mapStateToProps)(Dashboard);