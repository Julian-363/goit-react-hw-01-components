import React from 'react';
import '../profile.css';
import PropTypes from 'prop-types';

function Status({ stats }) {
  return (
    <ul className="stats">
      <li>
        <span className="stats__label">Followers </span>
        <span className="stats__quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="stats__label">Views </span>
        <span className="stats__quantity">{stats.views}</span>
      </li>
      <li>
        <span className="stats__label">Likes </span>
        <span className="stats__quantity">{stats.likes}</span>
      </li>
    </ul>
  );
}

Status.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Status;
