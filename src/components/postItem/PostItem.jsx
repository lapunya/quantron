import React from 'react';
import cl from './postItem.module.css';
import defaultAvatar from '../../assets/images/default-avatar.png';

const PostItem = ({ avatar, title, link }) => {

    return (
        <li className={cl.postItem}>
            <a className={cl.postLink} href={link}>
                <img className={cl.userAvatar} src={avatar ? avatar : defaultAvatar} alt="" />
                <h2 className={cl.postTitle}>{title}</h2>
            </a>
        </li>
    )
}

export default PostItem;