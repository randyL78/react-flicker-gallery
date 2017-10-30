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


<<<<<<< HEAD
  // Use axios to pull photos from flickr with tags from the search bar value, default to search for celebrities
  searchFlickr = (searchQuery = 'celebrities') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=${this.state.numberToDisplay}&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        // Prefilter our array so that only elements we need are passed
        searchItems: response.data.photos.photo,
        isLoading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    this.setState({searchedTerm:searchQuery});
  }

  //grab text from nav buttons and use as search term
  handleNav = e => {
    this.searchFlickr(e.target.textContent);
  };

  render() {

    return (
=======
>>>>>>> Convert-Dynamic-Main
      <BrowserRouter>
        <div className="container">


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
