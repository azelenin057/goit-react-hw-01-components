import React from 'react';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={friend.isOnline ? css.statusOnline : css.statusOffline}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
