import * as React from 'react';
import { Button, Card, Image, Icon, Segment, Form } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { useState, FormEvent } from 'react';
import { v4 as uuid } from 'uuid';

interface IProps {
  setEditMode: ( editMode: boolean ) => void;
  activity: IActivity;
  createActivity: ( activity: IActivity ) => void;
  editActivity: ( activity: IActivity ) => void;
}

const ActivityForm: React.FC<IProps> = ( {
  setEditMode,
  activity: intialFormState,
  createActivity,
  editActivity
} ) => {

  const initializeForm = () => {
    if ( intialFormState ) {
      return intialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>( initializeForm );

  const handleSubmit = () => {
    if ( activity.id.length == 0 ) {
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity( newActivity );
    } else {
      editActivity( activity );
    }
  };

  const handleInputChange = ( event: FormEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = event.currentTarget;
    setActivity( { ...activity, [name]: value } );
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} >
        <Form.Input
          onChange={handleInputChange}
          name='title'
          placeholder='Title'
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          rows={2}
          placeholder='Description'
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name='category'
          placeholder='Category'
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name='date'
          type='datetime-local'
          placeholder='Date'
          value={activity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          name='city'
          placeholder='City'
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name='venue'
          placeholder='Veneu'
          value={activity.venue}
        />
        <Button
          floated='right'
          positive type='submit'
          content='Submit'
        />
        <Button
          onClick={() => setEditMode( false )}
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;