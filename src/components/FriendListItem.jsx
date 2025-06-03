import clsx from "clsx";

import css from "../components/FriendListItem.module.css";
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="128" />
      <p className={css.itemTitle}>{name}</p>
      <p className={clsx(isOnline ? css.greenText : css.redText)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
 isOnline: PropTypes.bool.isRequired,
};


export default FriendListItem;