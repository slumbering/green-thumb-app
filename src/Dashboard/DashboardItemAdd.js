import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { plantActions } from '../actions/plant.action';
import { connect } from 'react-redux';

class DashboardItemAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            species: '',
            waterPeriod: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const plant = {
            name: this.state.name,
            species: this.state.species,
            waterPeriod: parseInt(this.state.waterPeriod)
        }

       this.props.dispatch(
           plantActions.create(plant)
       );
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field name="name" control={Input} onChange={(event) => this.setState({name: event.target.value})} fluid label='Nom de la plance' placeholder='Nom de la plance' />
                        <Form.Field name="species" control={Input} onChange={(event) => this.setState({species: event.target.value})} fluid label='Espèce' placeholder='Espèce' />
                        <Form.Field name="waterPeriod" control={Input} type='number' max={5} onChange={(event) => this.setState({waterPeriod: event.target.value})} fluid label='fréquence darrosage' placeholder='fréquence darrosage' />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

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
export default connect(mapStateToProps)(DashboardItemAdd);