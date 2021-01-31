import React from 'react';
import {Card, CardBody} from "@progress/kendo-react-layout";
import {Grid, GridColumn} from "@progress/kendo-react-grid";


const PasswordList = (props) => {
    const {passwords} = props;
    const gridData = passwords.map(i => ({'password': i}));

    if (passwords.length > 0) return(
        <Card className={'mt-2'}>
            <CardBody>
                <Grid data={gridData} style={{maxHeight: '19rem'}}>
                    <GridColumn field={'password'} title={'generated passwords'}/>
                </Grid>
            </CardBody>
        </Card>
    )

    return null;
}

export default PasswordList;