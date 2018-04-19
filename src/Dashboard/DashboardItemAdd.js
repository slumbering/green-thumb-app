import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

class DashboardItemAdd extends Component {

    state = {
        name: '',
        species: '',
        watering: 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addItem(this.state);
        this.setState({name: '',species: '',watering: 0});
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} onChange={(event) => this.setState({name: event.target.value})} fluid label='Nom de la plance' placeholder='Nom de la plance' />
                        <Form.Field control={Input} onChange={(event) => this.setState({species: event.target.value})} fluid label='Espèce' placeholder='Espèce' />
                        <Form.Field control={Input} onChange={(event) => this.setState({watering: event.target.value})} fluid label='fréquence darrosage' placeholder='fréquence darrosage' />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default DashboardItemAdd;