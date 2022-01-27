import React, { useEffect, useState } from "react";
import "./Comments.scss";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comments = (props) => {
  const { id } = useParams();
  const [comments, setComments] = useState(props.comments || []);

  const addComment = (text, checked, parentId) => {
    const comment = {
      userId: "615f304d7067ad94bd94a0ce",
      fullName: "Jane Doe",
      text: text,
      time: new Date(),
      parentId: parentId || null,
      checked: checked,
    };

    // LOCALHOST
    // `http://localhost:5000/books/${id}/comments`
    axios
      .post(`https://bookcrossing-api.herokuapp.com/books/${id}/comments`, {
        comments: comment,
      })
      .then((res) => {
        comment._id = res.data;
        setComments([comment, ...comments]);
      });
  };
  useEffect(() => {}, [comments]);

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
              currentUserId={"615f304d7067ad94bd94a0ce"}
            />
          ))}
      </div>
    </div>
  );
};
export default Comments;
