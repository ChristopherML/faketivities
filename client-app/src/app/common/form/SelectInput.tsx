import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label, Select } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string>, FormFieldProps { }

const SelectInput: React.FC<IProps> = ( {
  input,
  width,
  options,
  placeholder,
  id = null,
  meta: { touched, error },
  ...rest
} ) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <Select
        value={input.value}
        onChange={( e, data ) => input.onChange( data.value )}
        placeholder={placeholder}
        options={options}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
