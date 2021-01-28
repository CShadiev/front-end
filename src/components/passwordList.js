import React from 'react';
import {Card, CardBody} from "@progress/kendo-react-layout";


const PasswordList = (props) => {
    const {passwords} = props;

    if (passwords.length > 0) return(
        <Card className={'mt-2'}>
            <CardBody>
                {passwords.map(i => (
                    <div className={'row password-row'}>
                        <div className={'col-12 text-centered'}>
                            {i}
                        </div>
                    </div>
                ))}
            </CardBody>
        </Card>
    )

    return null;
}

export default PasswordList;