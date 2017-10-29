// base libraries
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import SubContainer from './SubContainer';

const PhotoContainer = props => {
  return (
   <SubContainer searchItems = {props.searchItems} searchedTerm = {props.searchedTerm} />
  )
}

PhotoContainer.propTypes = {
  searchItems : PropTypes.array.isRequired,
  searchedTerm : PropTypes.string.isRequired,
  isLoading : PropTypes.bool
}


export default PhotoContainer;
