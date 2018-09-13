import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class DashboardItemAdd extends Component {

    handleSubmit = (formProps) => {
        this.props.createPlant(formProps);
    }

    render() {

        const { handleSubmit } = this.props;
        return(
            <div>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                        <label>Nom de la plante </label>
                        <Field
                            name="name"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                        </Form.Field>

                        <Form.Field>
                        <label>Espèce </label>
                        <Field
                            name="species"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                        </Form.Field>

                        <Form.Field>
                        <label>Fréquence d'arrosage</label>
                        <Field
                            name="waterPeriod"
                            type="number"
                            component="input"
                            autoComplete="none"
                        />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { plantsList: state.plantsList};
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
export default compose(
    connect( mapStateToProps, actions),
    reduxForm({form: 'addPlant'})
)(DashboardItemAdd);