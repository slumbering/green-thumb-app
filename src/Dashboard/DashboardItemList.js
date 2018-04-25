import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import DashboardItem from './DashboardItem';

const DashboardItemList = (props) => {
    return(
        <div>
            {
                props.itemList.map(item =>  <DashboardItem data={item} key={item.id}/>)
            }
        </div>
    )
}

export default DashboardItemList;