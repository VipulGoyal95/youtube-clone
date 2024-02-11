import React, { useState } from "react";
import "./comments.scss";
import Comment from "../comment/comment";
import { useDispatch, useSelector } from "react-redux";
import { insertcomment } from "../../redux/slice/commentsSlice";
import { useParams } from "react-router-dom";

const Comments = ({ commentCount }) => {
  const { comments } = useSelector((state) => state.comments);
  const { photoURL } = useSelector((state) => state.user.user);
  const [comment,setComment]=useState("");
  const dispatch = useDispatch();
  const {id}=useParams();
  const handlecomment=(e)=>{
    e.preventDefault();
    // console.log(comment);
    if(comment.length==0) return;
    dispatch(insertcomment(id,comment));
    setComment("");
  }
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
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
          />
          <button type="submit" className="comment-button" onClick={handlecomment}>
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
