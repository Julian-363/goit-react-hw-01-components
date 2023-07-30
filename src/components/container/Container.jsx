import React from 'react';
import './container.css';
import PropTypes from 'prop-types';

function ContainerProfile({ children, type }) {
  return <div className={type}>{children}</div>;
}

ContainerProfile.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['container', 'profile', 'friends', 'other']).isRequired,
};

export default ContainerProfile;
