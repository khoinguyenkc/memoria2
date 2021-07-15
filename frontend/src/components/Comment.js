import React from "react";

const Comment = props => (
// content: "this sounds like so much fun. srsly jealous"
// created_at: "2021-07-15T05:52:22.672Z"
// id: 1
// post_id: 5
// updated_at: "2021-07-15T05:52:22.672Z"
// user_id: 2

  <div>
    avatar here. {props.comment.user_id}
    {props.comment.content}
  </div>
);

export default Comment;
