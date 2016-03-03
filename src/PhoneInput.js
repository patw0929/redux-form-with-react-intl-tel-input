import React, { PropTypes, Component } from 'react';
import FormField from './FormField';
import IntlTelInput from 'react-intl-tel-input';
import 'file?name=libphonenumber.js!../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../node_modules/react-intl-tel-input/dist/main.css';

class PhoneInput extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    label: PropTypes.string,
  }

  shouldComponentUpdate = FormField.shouldFormFieldUpdate;

  render() {
    let onChange = this.props.field.onChange;

    onChange = (...args) => {
      this.props.field.onChange(args);
    };

    return (
      <FormField field={ this.props.field }
        label={ this.props.label }
      >
        <IntlTelInput css={['intl-tel-input', 'form-control']}
          css={['intl-tel-input', 'form-control']}
          utilsScript={'libphonenumber.js'}
          onPhoneNumberChange={onChange}
        />
      </FormField>
    );
  }
}

export default PhoneInput;
