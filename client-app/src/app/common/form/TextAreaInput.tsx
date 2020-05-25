import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string>, FormFieldProps { }

const TextAreaInput: React.FC<IProps> = ( {
  input,
  width,
  rows,
  placeholder,
  id = null,
  meta: { touched, error },
  ...rest
} ) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <textarea rows={rows} {...input} placeholder={placeholder} />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextAreaInput;
