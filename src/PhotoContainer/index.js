// base libraries
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import NotFound from './NotFound';
import Photo from './Photo';



const PhotoContainer = props => (

  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {props.searchItems
        .map((item) =>
          <Photo
            // Set key to items unique photo id
            key = {item.id}

            // Format for flickr url calls:
            // https://farm{farm}.staticflickr.com/{server}/{id}_{secret}_{size}.jpg
            photoURL = {"https://farm" +
                        item.farm +
                        ".staticflickr.com/" +
                        item.server +
                        "/" +
                        item.id +
                        "_" +
                        item.secret +
                        "_m.jpg"}
           />
        )
      }
      <NotFound />
    </ul>
  </div>
)

PhotoContainer.propTypes = {
  searchItems : PropTypes.array.isRequired
}

export default PhotoContainer;
