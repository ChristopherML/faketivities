import React, { FC, useContext, useState } from 'react';
import { Header, Tab, Button, Grid } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import ProfileEditForm from './ProfileEditForm';
import { capitalizeFirstLetter } from '../../app/common/util/util';

const ProfileDescription: FC = () => {
  const rootStore = useContext( RootStoreContext );
  const { profile,
    isCurrentUser,
    updateProfile,
  } = rootStore.profileStore;
  const [editMode, setEditMode] = useState( false );

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16} style={{ paddingBottom: 0 }}>
          <Header
            floated='left'
            content={
              `About ${capitalizeFirstLetter( profile!.username )}`}
            icon='user'
          />
          {isCurrentUser && (
            <Button
              floated='right'
              basic
              content={editMode ? 'Cancel' : 'Edit Profile'}
              onClick={() => { setEditMode( !editMode ); }}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <ProfileEditForm
              updateProfile={updateProfile}
              profile={profile!}
            />
          ) : (
              <span>{profile!.bio}</span>
            )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default observer( ProfileDescription );
