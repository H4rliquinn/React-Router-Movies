import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="selected"><span className="saved-movie">{movie.title}</span></NavLink>
    ))}
    <NavLink exact to="/" activeClassName="selected"><div className="home-button">Home</div></NavLink>
  </div>
);

export default SavedList;
