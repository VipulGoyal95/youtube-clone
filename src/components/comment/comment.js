import React from "react";
import "./comment.scss";
import moment from "moment";
const Comment = ({ comment: snippet }) => {
  // console.log(snippet.snippet.topLevelComment);
  const { textDisplay, authorProfileImageUrl, authorDisplayName, publishedAt } =
    snippet.snippet.topLevelComment.snippet;
  return (
    <div className="comment-container">
      <img src={authorProfileImageUrl} alt="profile" />
      <div className="info">
        <div>
          <span className="ch-name">{authorDisplayName}</span>
          <span className="list__info__time">
            {moment(publishedAt).fromNow() === "a day ago"
              ? "1 day ago"
              : moment(publishedAt).fromNow()}
          </span>
        </div>
        <div className="text">{textDisplay}</div>
      </div>
    </div>
  );
};

export default Comment;
