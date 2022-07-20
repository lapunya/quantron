import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import PostService from '../API/postService';
import PostList from '../components/postList/PostsList';
import Loader from '../components/UI/loader/Loader';
import Button from '../components/UI/button/Button';

const PostsPage = () => {
    let [data, setData] = useState([]);
    let [sortUp, setSortUp] = useState(true)

    // Вызов кастомного хука, который возвращает функцию для получения данных с сервера.Так же хук возвращает значение для отображения Loading и текст ошибки (в случае ошибки)
    let [getPosts, isLoading, errorText] = useFetch(async () => {
        let response = await PostService.getData();
        let posts = _.filter(response.data.items, (post) => post.owner.reputation >= 50 && post.is_answered === true);
        let sortedPosts;
        if (sortUp) {
            sortedPosts = _.sortBy(posts, 'creation_date');
        } else {
            sortedPosts = _.orderBy(posts, 'creation_date', 'desc');
        }
        setData(sortedPosts);
    })

    useEffect(() => {
        getPosts()
    }, [sortUp])

    return (
        <div>
            <Button onClick={() => setSortUp(!sortUp)}>Сортировка по дате создания {sortUp  ? '\u25B2' : '\u25BC'}</Button>
            {errorText && <h2 style={{ textAlign: 'center' }}>{errorText}</h2>}
            {isLoading ? <Loader /> : <PostList data={data} sortUp={sortUp} setSortUp={setSortUp}/>}
        </div>
    )
}

export default PostsPage;