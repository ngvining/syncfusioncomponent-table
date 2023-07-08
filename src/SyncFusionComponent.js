//
import { ColumnDirective, ColumnsDirective, GridComponent, Group, Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { data2 } from './Stock_Status_data.jsx';
import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";


export default function SyncFusionComponent(props) {

    function SyncFusionComp() {
        const sortSettings = {
            columns: [
                { field: 'EmployeeID', direction: 'Ascending' }
            ]
        };

        return (
            <div className='SyncFusionGraph'>
                <GridComponent dataSource={data2} allowSorting={true} sortSettings={sortSettings} >
                    <ColumnsDirective>

                        <ColumnDirective field='Label' width='200' textAlign="Right" />
                        <ColumnDirective field='Last WK' width='100' textAlign="Right" />
                        <ColumnDirective field='2wk ago' width='100' textAlign="Right" />
                        <ColumnDirective field='3wk ago' width='100' textAlign="Right" />
                        <ColumnDirective field='4wk ago' width='100' textAlign="Right" />

                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Group]} />
                </GridComponent>
            </div>
        );
    }

    return (
            <SyncFusionComp />        
    );
}