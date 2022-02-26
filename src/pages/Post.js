import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = () => {
  // in url test this :  /post/3?name=aayush&age=23
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <h3>Id from url is = {id}</h3>
      <h3>{query.get("name")}</h3>
      <h3>{query.get("age")}</h3>
    </>
  );
};

// using params hook
// const Post = () => {
//   const { id } = useParams();
//   return <h3>Id from url is = {id}</h3>;
// };

// or you can also use params props
// const Post = ({ match }) => {
//   return <h3>Id from url is = {match.params.id}</h3>;
// };

export default Post;
