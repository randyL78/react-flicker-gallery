// base libraries
import React from 'react';

import  {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// custom components
import PhotoContainer from './PhotoContainer';
import ErrorPage from './ErrorPage';


const App = () => (
      <BrowserRouter>

          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/celebrities" />} />
            <Route exact path="/anime" render={ () =><PhotoContainer topic= 'anime' searchOn = 'false'/>  } />
            <Route exact path="/sports" render={ () =><PhotoContainer topic= 'sports' searchOn = 'false'/>  } />
            <Route exact path="/celebrities" render={ () =><PhotoContainer topic= 'celebrities' searchOn = 'false'/>  } />
            <Route exact path="/search" render={ () =><PhotoContainer topic= 'celebrities' searchOn = 'true'/>  } />
            <Route path="/search/:topic" render={ () =><PhotoContainer topic= 'search' searchOn = 'true'/>  } />
            <Route component={ErrorPage}/>
          </Switch>

      </BrowserRouter>
);

export default App;
