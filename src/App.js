import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import PostList from './components/postList/PostList';
import './App.css'
import Header from './components/header/Header';

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([{}]);
  let [sortUp, setSortUp] = useState(true)

  useEffect(() => {
    axios.get(`https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow`)
    .then(res => {
      setIsLoading(true);
      let posts = _.filter(res.data.items, (el) => el.owner.reputation >= 50 && el.is_answered === true);
      let sortedPosts;
      if (sortUp) {
        sortedPosts = _.sortBy(posts, 'creation_date');
      } else {
        sortedPosts =_.orderBy(posts, 'creation_date', 'desc');
      }
      setData(sortedPosts);
      setIsLoading(false);
    })
  }, [sortUp])

  return (
    <div className="App">
      <Header sortUp={sortUp} setSortUp={setSortUp}/>
      {isLoading ? <span>Loading...</span> : <PostList data={data} />}

    </div>
  );
}

export default App;
