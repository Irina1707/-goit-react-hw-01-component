import PropTypes from 'prop-types';
//import css from './FriendListItem.module.css';
import { FriendItem, Status, FriendAvatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendItem>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
</FriendItem>
    )
}
//className={`${css.status} ${css[isOnline ]}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
