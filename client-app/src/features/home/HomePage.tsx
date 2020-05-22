import * as React from 'react';
import { Container, Segment, Header, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../app/stores/rootStore';
import { useContext, Fragment } from 'react';

const HomePage: React.FC = () => {
  const rootStore = useContext( RootStoreContext );
  const { isLoggedIn, user } = rootStore.userStore;

  return (
    <Segment inverted textAlign='center' vertical className='masthead' >
      <Container text>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
          Fakebooktivities
        </Header>
        {isLoggedIn && user ? (
          <Fragment>
            <Header as='h2' inverted content={`Welcome back, ${user.displayName}!`} />
            <Button as={Link} to='/activities' size='huge' inverted>
              Go to activities!
            </Button>
          </Fragment>
        ) : (
            <Fragment>
              <Header as='h2' inverted content='Welcome to Fakebooktivities' />
              <Button as={Link} to='/login' size='huge' inverted>
                Login
              </Button>
              <Button as={Link} to='/register' size='huge' inverted>
                Register
              </Button>
            </Fragment>
          )}

      </Container>
    </Segment>
  );
};
export default observer( HomePage );