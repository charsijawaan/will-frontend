import React, { useEffect, useState } from "react";

import posts from "../common/posts";
import postLoading from "../common/postLoading";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const FlyerListing = ({user}) => {
  let history = useHistory();
  const PostLoading = postLoading(posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = process.env.REACT_APP_API_URL + "/flyer/";

    fetch(apiURL)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  
  return (    
  <div className="global-container bg-fixed" style={{backgroundAttachment:"fixed"}}>
  <div className="back-button">
        <Link onClick={history.goBack}><FaArrowLeft /></Link>
  </div>
    <div className="container">
      
  <h4>Flyers </h4>
      <PostLoading isLoading={appState.loading} posts={appState.posts} user={user} />
    </div>
    </div>
  );
};
export default FlyerListing;
