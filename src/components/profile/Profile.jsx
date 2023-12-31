import React from 'react';
import './profile.css';
import ContainerProfile from '../container/Container';
import Description from './description/Description';
import Status from './status/Status';
import PropTypes from 'prop-types';

function Profile({ avatar, username, tag, location, stats }) {
  return (
    <ContainerProfile type="container profile">
      <div className="wrapper">
        <Description
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
        />
        <Status stats={stats} />
      </div>
    </ContainerProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

export default Profile;
