import React, { FC } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, isRequired } from 'revalidate';
import TextInput from '../../app/common/form/TextInput';
import TextAreaInput from '../../app/common/form/TextAreaInput';
import { IProfile } from '../../app/models/profile';

const validate = combineValidators( {
  displayName: isRequired( 'Display Name' )
} );

interface IProps {
  updateProfile: ( profile: IProfile ) => void;
  profile: IProfile;
}

const ProfileEditForm: FC<IProps> = ( { updateProfile, profile } ) => {
  return (
    <FinalForm
      validate={validate}
      initialValues={profile}
      onSubmit={updateProfile}
      render={( { submitting, handleSubmit, invalid, pristine } ) => (
        <Form onSubmit={handleSubmit} disable={submitting} error>
          <Field
            name='displayName'
            placeholder='Display Name'
            value={profile!.displayName}
            component={TextInput}
          />
          <Field
            name='bio'
            placeholder='Bio'
            rows={3}
            value={profile!.bio}
            component={TextAreaInput}
          />
          <Button
            loading={submitting}
            disabled={invalid || pristine}
            floated='right'
            positive
            content='Update Profile'
          />
        </Form>
      )}
    />
  );
};

export default observer( ProfileEditForm );
