import React, { useState } from "react";
import "./Comment.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comment = ({ comment, currentUserId }) => {
  const canDelete = currentUserId === comment.userId;
  const time = new Date(comment.time).toLocaleDateString();
  const { id } = useParams();
  const [spoilerAlert, setSpoilerAlert] = useState(comment.checked);

  // LOCALHOST
  // `http://localhost:5000/books/${id}/comments`

  const deleteComment = (commentId) => {
    if (window.confirm("Czy na pewno chcesz usunąć ten komentarz?")) {
      axios.delete(
        `https://bookcrossing-api.herokuapp.com/books/${id}/comments`,
        {
          data: {
            commentId: commentId,
          },
        }
      );
    }
  };

  function changeClass() {
    setSpoilerAlert(false);
  }

  return (
    <section className="commentSec">
      <div className="commentUserName">{comment.fullName}</div>
      <div className="commentDate">{time}</div>
      <div>
        {spoilerAlert ? (
          <div
            className="spoilerComment commentText"
            onClick={() => changeClass()}
          >
            "Uwaga Spoiler! Ten komentarz może zawierać treści zdradzające
            fabułę."
          </div>
        ) : (
          <div className="regularComment commentText">{comment.text}</div>
        )}
      </div>
      <div className="commentActions">
        {canDelete && (
          <div
            className="commentActionsBtn"
            onClick={() => deleteComment(comment._id)}
          >
            Usuń
          </div>
        )}
      </div>
    </section>
  );
};
export default Comment;
