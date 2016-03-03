import React, { PropTypes, Component } from 'react';
import FormField from './FormField';

class TextInput extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
  }

  shouldComponentUpdate = FormField.shouldFormFieldUpdate;

  render() {
    const { field, help, label, onChange, ...inputProps } = this.props;

    return (
      <FormField field={field} help={help} inputProps={inputProps} label={label}>
        <input
          {...inputProps}
          className="form-control"
          name={field.name}
          onBlur={field.onBlur}
          onChange={onChange && field.onChange}
        />
      </FormField>
    );
  }
};

export default TextInput;
