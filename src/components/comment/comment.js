import React from "react";
import "./comment.scss";
const Comment = () => {
  return (
    <div className="comment-container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        alt="profile"
      />
      <div className="info">
        <div>
          <span className="ch-name">Vipul Goyal</span>
          <span className="list__info__time">2year ago</span>
        </div>
        <div className="text">Nice Video dude</div>
      </div>
    </div>
  );
};

export default Comment;
