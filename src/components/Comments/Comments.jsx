// import React from "react";
import React, { useEffect, useState } from "react";
import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = (props) => {
  const { id } = useParams();
  // const comments = props.comments;
  const [comments, setComments] = useState(props.comments || []);
  // console.log("sorting")

  // const rootComments = () => {
  //   setComments([].concat(comments).sort((a, b) => new Date(b.time) - new Date(a.time))
  //   )};

  // const rootComments = comments.filter(
  // (comments) => comments.parentId === null
  // ).concat(comments).sort((a, b) => new Date(b.time) - new Date(a.time));

  // setComments([].concat(comments).filter(
  //   (comments) => comments.parentId === null
  // ).sort((a, b) => new Date(b.time) - new Date(a.time)));

  const getReplies = (commentId) => {
    return comments
      .filter((comments) => comments.parentId === commentId)
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
  };

  const addComment = (text, checked, parentId) => {
    console.log("addComment", text, parentId);
    const comment = {
      userId: "615f304d7067ad94bd94a0ce",
      fullName: "Jane Doe",
      text: text,
      time: new Date(),
      parentId: parentId || null,
      checked: checked
    };
   
    // LOCALHOST
    // `http://localhost:5000/books/${id}/comments`
    axios
      .post(`https://bookcrossing-api.herokuapp.com/books/${id}/comments`, {
        comments: comment
      })
      .then((res) => {
        comment._id = res.data
        setComments([comment, ...comments]);
      });
  };
  useEffect(() => {
    // console.log(rootComments)
  }, [comments]);

  // const sendComment = (dataFromInput) => {
  // setData(dataFromInput);
  // console.log(data);
  // const comment = {
  //   userId: "615f304d7067ad94bd94a0ce",
  //   text: data,
  //   fullName: "Jane Doe",
  // };

  //bookcrossing-api.herokuapp.com/books/${id}

  return (
    <div className="comments">
      <h3>Komentarze</h3>
      <CommentForm submitLabel="Dodaj" handleSubmit={addComment} />
      <div>
        {comments
          .filter((comments) => comments.parentId === null)
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .map((rootComment) => (
            <Comment
              key={rootComment._id}
              comment={rootComment}
              replies={getReplies(rootComment._id)}
              currentUserId={"615f304d7067ad94bd94a0ce"}
              // {"616f0dbe9924f767adb6a705"}
              // {rootComment.parentId}
            />
          ))}
      </div>
    </div>
  );
};
export default Comments;
