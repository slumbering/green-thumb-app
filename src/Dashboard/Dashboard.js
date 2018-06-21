import React, { Component } from 'react';
import { Container, Button, Icon, Grid } from 'semantic-ui-react';
import { connect, Provider } from 'react-redux';
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
                    <Grid container columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                Photo plante plus nom plante
                            </Grid.Column>
                            <Grid.Column>
                                espèce plante
                            </Grid.Column>
                            <Grid.Column>
                                jour restant avant arrosage
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {
                        this.props.items !== undefined
                        ? <DashboardItemList itemList={this.props.items}/>
                        : <div>no items yet </div>
                    }
                    {                        
                        this.state.requestNewItem
                        ? <DashboardItemAdd addItem={this.props.addItem}/>
                        : <div>no request </div>
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