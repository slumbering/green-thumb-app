import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

class DashboardItem extends Component {

    render() {
        return(
            <div>
                <Grid container columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                {this.props.data.name}
                            </Grid.Column>
                            <Grid.Column>
                                {this.props.data.species}                                
                            </Grid.Column>
                            <Grid.Column>
                                {this.props.data.watering}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </div>
        )
    }
}

export default DashboardItem;