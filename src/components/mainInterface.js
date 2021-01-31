import React from 'react';
import {Card, CardBody, CardTitle} from "@progress/kendo-react-layout";
import RequestForm from "./requestForm";
import PasswordList from "./passwordList";


const MainInterface = (props) => {
    const {presets, controls, fetchPresets} = props;
    const [passwords, setPasswords] = React.useState([]);
    const [showDialog, setShowDialog] = React.useState(false);


    if (presets && presets.length > 0) return (
        <div>
            <div className={'row justify-content-center mt-5'}>
                <div className={'col-md-6 col-xs-12'}>
                    <Card>
                        <CardTitle>
                            Password generator
                        </CardTitle>
                        <CardBody>
                            <RequestForm presets={presets} setPasswords={setPasswords}
                                         setShowDialog={setShowDialog}
                                         requestHandler={controls['getPasswords']}/>
                        </CardBody>
                    </Card>
                    <PasswordList passwords={passwords} />
                </div>
            </div>
        </div>
    )

    return null;
}

export default MainInterface;