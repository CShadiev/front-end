import React from 'react';
import {Field, Form, FormElement} from "@progress/kendo-react-form";
import {ComboBox} from "@progress/kendo-react-dropdowns";
import {Button} from "@progress/kendo-react-buttons";
import {NumericTextBox} from "@progress/kendo-react-inputs";


const RequestForm = (props) => {
    const {presets, requestHandler} = props;
    const {setPasswords, setShowDialog} = props;
    const presetTitles = presets.map(item => item['title']);
    const defaults = {
        'n': 20,
        'preset': 'balanced'
    };

    const submitForm = (valueGetter) => {
        const n = valueGetter('n');
        const preset = valueGetter('preset');
        const filteredPresets = presets.filter(i => i['title'] === preset);
        if (filteredPresets.length === 1) {
            const preset = filteredPresets[0];
            requestHandler(preset, n, setPasswords);
        }
    }
    const showDialog = () => setShowDialog(true);


    return (
        <Form initialValues={defaults}
              render={(formProps) => (
                  <FormElement>
                      <fieldset className={'k-form-fieldset'}>
                          <legend className={'k-form-legend'}>
                              Parameters:
                          </legend>
                          <div className={'row align-items-end'}>
                              <div className={'col-6 pr-4'}>
                                  <div className={'row align-items-end'}>
                                      <div className={'col pr-1'}>
                                          <Field name={'preset'} component={ComboBox}
                                                 id={'field-preset'}
                                                 data={presetTitles}
                                                 label={'Preset'} />
                                      </div>
                                      <div className={'col-auto pl-0'}>
                                          <Button icon={'edit'} look={'flat'}
                                                  onClick={showDialog} />
                                      </div>
                                  </div>
                              </div>
                              <div className={'col-4 pl-0 pr-1'}>
                                  <Field name={'n'} component={NumericTextBox}
                                         label={'N of passwords'} />
                              </div>
                              <div className={'k-form-buttons col-2 pl-1 pr-2'}>
                                  <Button onClick={() =>
                                      submitForm(formProps.valueGetter)}
                                          id={'form-submit-button'}
                                          type={'submit'}
                                          look={'flat'}>Go!</Button>
                              </div>
                          </div>
                      </fieldset>
                  </FormElement>
              )}/>)
}

export default RequestForm;