import React from 'react';
import PropTypes from 'prop-types';

function ContainerProfile({ children }) {
  return <div className="profile">{children}</div>;
}

ContainerProfile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerProfile;
