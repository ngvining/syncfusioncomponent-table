//
import { ColumnDirective, ColumnsDirective, GridComponent, Group, Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { data } from './MOCK_DATA.jsx';
import "../node_modules/@syncfusion/ej2-react-grids/styles/fluent-dark.css";


export default function SyncFusionComponent2(props) {

    function SyncFusionGraph() {
        const pageSettings = { pageSize: 100 };

        const sortSettings = {
            columns: [
                { field: 'id', direction: 'Ascending' }
            ]
        };

        return (
            <div className='SyncFusionGraph'>
                <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} allowSorting={true} sortSettings={sortSettings} >
                    <ColumnsDirective>

                        <ColumnDirective field='id' width='200' textAlign="Right" />
                        <ColumnDirective field='first_name' width='100' textAlign="Right" />
                        <ColumnDirective field='last_name' width='100' textAlign="Right" />
                        <ColumnDirective field='email' width='100' textAlign="Right" />
                        <ColumnDirective field='gender' width='100' textAlign="Right" />
                        <ColumnDirective field='ip_address' width='100' textAlign="Right" />

                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Group]} />
                </GridComponent>
            </div>
        );
    }

    return (
        <SyncFusionGraph />
    );
}