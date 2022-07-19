import _ from 'lodash';
import React from 'react';
import PostItem from '../postItem/PostItem';
import cl from './postList.module.css'

const PostList = (props) => {
    function createItem(post) {
        return <PostItem key={post.question_id} avatar={post.owner.profile_image} title={post.title} link={post.link}/>
    }
    let postList = _.map(props.data, createItem)
    return (
        <ul className={cl.postList}>{postList}</ul>
    )
}

export default PostList;