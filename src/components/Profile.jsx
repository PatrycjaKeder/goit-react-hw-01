import css from "../components/Profile.module.css";
import PropTypes from 'prop-types';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userDescription}>@{tag}</p>
        <p className={css.userDescription}>{location}</p>
      </div>
      <ul className={css.userPropsList}>
        <li className={css.propsListItem}>
          <span>Followers </span>
          <span className={css.boldText}>{stats.followers}</span>
        </li>
        <li className={css.propsListItem}>
          <span>Views </span>
          <span className={css.boldText}>{stats.views}</span>
        </li>
        <li className={css.propsListItem}>
          <span>Likes </span>
          <span className={css.boldText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
};

export default Profile;