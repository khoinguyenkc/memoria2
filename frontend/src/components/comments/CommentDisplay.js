import React from "react";
{/* <div class="product-review">

<div class="info">
<div class="user-avatar">
<img src="https://i0.wp.com/whda.org/wp-content/plugins/userswp/assets/images/no_profile.png"></img>
</div>
<div class="username">
<% if review.user.name %>
    <%= review.user.name %>
<% else %>
    <h4>Anonymous User</h4>
<% end %>
</div>

</div>

<div class="content">
<h3>Tile of Review</h4>
<%= review.content %>
<b><%= link_to "Full Review", product_review_path(@product, review) %></b>
</div>

</div> */}

const CommentDisplay = props => (
// content: "this sounds like so much fun. srsly jealous"
// created_at: "2021-07-15T05:52:22.672Z"
// id: 1
// post_id: 5
// updated_at: "2021-07-15T05:52:22.672Z"
// user_id: 2


  <div class="d-flex comment">
    
    <div style={{width: '40px'}} >
      <img width="40" height="40"  
      src={props.avatar}
      ></img>
    </div>

    <div class="bubble">
    <div class="fs-6 fw-bold " >{props.username}</div>
    <div >{props.comment.content}</div>
    </div>

  </div>




);

export default CommentDisplay;
