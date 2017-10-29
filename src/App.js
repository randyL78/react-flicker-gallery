// base libraries
import React, { Component } from 'react';
import axios from 'axios'
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
import Loading from './Loading';

// API key import
import apiKey from './config.js';

class App extends Component {


// Use constructor so that state info is set before compnent mounts
constructor() {
  super();
  this.state = {
    pendingSearch: "",
    searchedTerm: "",
    numberToDisplay: 48, // Change this to have different number of photos called and displayed
    isLoading: true,
    searchItems: []
  }

}

  //Once App loads perform search
  componentDidMount() {
    this.searchFlickr();
  }

  // Set pendingSearch's property to the value of the search input
  handleSearchInput = e => {
    this.setState({ pendingSearch: e.target.value });
  }

  // fetch photos using the value of pendingSearch as category
  handleSearchSubmit = e => {
    e.preventDefault();
    // Display loading icon
    this.setState({isLoading: true});

    this.searchFlickr(this.state.pendingSearch);

    // Reset search term
    this.setState({ pendingSearch: "" });
  };

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

  // grab text from nav buttons and use as search term
  handleNav = e => {
    this.searchFlickr(e.target.textContent);
  };

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/celebrities" />} />
            <Route path="/search" render={ () =><SearchForm
                        pendingSearch = {this.state.pendingSearch}
                        handleSearchInput = {this.handleSearchInput}
                        handleSearchSubmit = {this.handleSearchSubmit}
                      />  } />

          </Switch>
          <Navigation handleNav = {this.handleNav} />
          <Switch>
            <Route exact path="/anime" render={ () => {
                      return (  (this.state.isLoading)
                        ?  <p>Still Loading Results...</p>
                        :  <PhotoContainer isLoading = {this.state.isLoading} searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />)
                    } } />
            <Route exact path="/celebrities" render={ () => {
                      return (  (this.state.isLoading)
                        ?  <p>Still Loading Results...</p>
                        :  <PhotoContainer isLoading = {this.state.isLoading} searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />)
                    } } />
            <Route exact path="/sports" render={ () => {
                      return (  (this.state.isLoading)
                        ?  <p>Still Loading Results...</p>
                        :  <PhotoContainer isLoading = {this.state.isLoading} searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />)
                    } } />
            <Route exact path="/search" render={ () => {
                      return (  (this.state.isLoading)
                        ?  <Loading />
                        :  <PhotoContainer isLoading = {this.state.isLoading} searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />)
                    } } />
            <Route component={ErrorPage}/>
          </Switch>



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
