import React from "react";
import "./comments.scss";
import Comment from "../comment/comment";

const Comments = () => {
  return (
    <div className="comments">
      <p>405 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          alt="profilephoto"
          className="profile-photo"
        />
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment"
          />
          <button type="submit" className="comment-button">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(20)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
