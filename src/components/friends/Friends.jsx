import React from 'react';
import PropTypes from 'prop-types';
import ContainerProfile from 'components/container/Container';
import ItemFriend from './ItemFriend/ItemFriend';
import './friends.css';

function Friends({ friends }) {
  return (
    <ContainerProfile type="container friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <ItemFriend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </ContainerProfile>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Friends;
