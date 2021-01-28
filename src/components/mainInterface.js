import React from 'react';
import {Card, CardBody, CardTitle} from "@progress/kendo-react-layout";
import {Form, FormElement} from "@progress/kendo-react-form";
import RequestForm from "./requestForm";
import PasswordList from "./passwordList";


const MainInterface = (props) => {
    const {presets, controls} = props;
    const [passwords, setPasswords] = React.useState([]);

    React.useEffect(() => console.log(passwords))

    if (presets && presets.length > 0) return (
        <div className={'row justify-content-center mt-5'}>
            <div className={'col-md-6 col-xs-12'}>
                <Card>
                    <CardTitle>
                        Password generator
                    </CardTitle>
                    <CardBody>
                        <RequestForm presets={presets} setPasswords={setPasswords}
                                     requestHandler={controls['getPasswords']}/>
                    </CardBody>
                </Card>
                <PasswordList passwords={passwords} />
            </div>
        </div>
    )

    return null;
}

export default MainInterface;