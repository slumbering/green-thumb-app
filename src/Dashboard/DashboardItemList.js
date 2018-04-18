import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

class DashboardItemList extends Component {
    render() {
        return(
            <div>
                <Grid container columns={3}>
                    <Grid.Column>
                        Photo plante plus nom plante
                    </Grid.Column>
                    <Grid.Column>
                        espèce plante
                    </Grid.Column>
                    <Grid.Column>
                        jour restant avant arrosage
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default DashboardItemList;