import * as React from 'react';
import { Container, Segment, Header, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const HomePage: React.FC = () => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead' >
      <Container text>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
          Fakebooktivities
            </Header>
        <Header as='h2' inverted content='Welcome to Fakebooktivities' />
        <Button as={Link} to='/activities' size='huge' inverted>
          Take me to the activities!
            </Button>
      </Container>
    </Segment>
  );
};
export default observer( HomePage );