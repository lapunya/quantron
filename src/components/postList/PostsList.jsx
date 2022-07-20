import _ from 'lodash';
import React from 'react';
import PostItem from '../postItem/PostItem';
import cl from './postsList.module.css'

const PostList = (props) => {
    function createItem(post) {
        return <PostItem key={post.question_id} avatar={post.owner.profile_image} title={post.title} link={post.link} />
    }
    let postList = _.map(props.data, createItem)
    return (
        <div className={cl.postListBox}>
            {postList.length < 1
                ? <h2 className={cl.postListTitle}>По заданным параметрам постов не найдено.</h2>
                : <div>
                    <h2 className={cl.postListTitle}>Список постов</h2>
                    <ul className={cl.postList}>{postList}</ul>
                </div>
                
            }
        </div>
    )
}

export default PostList;