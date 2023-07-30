import React from 'react';
import PropTypes from 'prop-types';


function ItemFriend({ isOnline, avatar, name }) {
  return (
    <li className="item-friend">
      <div className={isOnline ? 'status online' : 'status offline'}></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

ItemFriend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemFriend;
