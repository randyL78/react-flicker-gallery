// base libraries
import React, { Component } from 'react';

// custom components
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

class App extends Component {

  state = {
    pendingSearch : "Pig",
    searchItems: [
      {
        id: 1,
        image : "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
      },
      {
        id: 2,
        image : "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"
      },
      {
        id: 3,
        image : "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"
      },
      {
        id: 4,
        image : "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"

      }
    ]
  }

  handleSearchInput = e => {
      // this.setState({ pendingSearch: e.target.value });
  }

  handleSearchSubmit = e => {
      e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <SearchForm
          pendingSearch = {this.pendingSearch}
          handleSearchInput = {this.handleSearchInput}
          handleSearchSubmit = {this.handleSearchSubmit}
        />
        <Navigation />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
