import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Table } from 'semantic-ui-react';

class DashboardItemList extends Component {

    state = { plants: '' }

    componentWillMount() {
        console.log('component will mount');
        this.props.fetchPlants();
    }

    render() {
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Photo plante plus nom plante
                        </Table.HeaderCell>
                            <Table.HeaderCell>
                                espèce plante
                        </Table.HeaderCell>
                            <Table.HeaderCell>
                                jour restant avant arrosage
                        </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.plantsList.length > 0 ? (
                            this.props.plantsList.map(function (plant) {
                                return <Table.Row key={plant.created_at}>
                                    <Table.Cell>
                                        {plant.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {plant.species}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {plant.waterPeriod}
                                    </Table.Cell>
                                </Table.Row>
                            })
                        ) : (
                                <Table.Row>
                                    <Table.Cell textAlign='center'>
                                        Aucune plantes dans l'inventaire
                                </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>

            </div>
        )
    }
}

// Construire ces méthodes en dehors de la class
function mapStateToProps(state) {
    return { plantsList: state.itemsReducer };
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
// export default Dashboard;

export default connect(mapStateToProps, actions)(DashboardItemList);