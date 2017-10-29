// base libraries
import React from 'react';

import  {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// custom components
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import ErrorPage from './ErrorPage';


const App = () => (

  //  return (  (this.state.isLoading)
  //    ?  <Loading />
  //    :  <PhotoContainer isLoading = {this.state.isLoading} searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />)

      <BrowserRouter>
        <div className="container">
          <Switch>

            <Route path="/search" render={ () =><SearchForm
                        pendingSearch = {this.state.pendingSearch}
                        handleSearchInput = {this.handleSearchInput}
                        handleSearchSubmit = {this.handleSearchSubmit}
                      />  } />

          </Switch>
          <Navigation handleNav = {this.handleNav} />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/celebrities" />} />
            <Route exact path="/anime" render={ () =><PhotoContainer topic= 'anime' searchOn = 'false'/>  } />
            <Route exact path="/sports" render={ () =><PhotoContainer topic= 'sports' searchOn = 'false'/>  } />
            <Route exact path="/celebrities" render={ () =><PhotoContainer topic= 'celebrities' searchOn = 'false'/>  } />
            <Route exact path="/search" render={ () =><PhotoContainer topic= 'celebrities' searchOn = 'true'/>  } />
            <Route path="/search/:topic" render={ () =><PhotoContainer topic= 'search' searchOn = 'true'/>  } />
            <Route component={ErrorPage}/>
          </Switch>



        </div>
      </BrowserRouter>
);

export default App;
