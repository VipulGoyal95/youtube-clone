import React from "react";
import "./comments.scss";
import Comment from "../comment/comment";
import { useSelector } from "react-redux";

const Comments = ({ commentCount }) => {
  const { comments } = useSelector((state) => state.comments);
  const { photoURL } = useSelector((state) => state.user.user);
  console.log(commentCount);
  return (
    <div className="comments">
      <p>{commentCount} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src={photoURL}
          alt="profilephoto"
          className="profile-photo"
        />
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment"
          />
          <button type="submit" className="comment-button">
            Comment
          </button>
        </form>
      </div>
      <div className="comments__list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
