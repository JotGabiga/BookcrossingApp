import React, { useState } from "react";
import "./Comment.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comment = ({ comment, currentUserId }) => {
  // const canReply = Boolean(currentUserId);
  // const fiveMinutes = 300000;
  // const timePassed = new Date() - new Date(comment.time) > fiveMinutes;
  const canDelete = currentUserId === comment.userId;
  // const canEdit = currentUserId === comment.parentId && !timePassed;
  const time = new Date(comment.time).toLocaleDateString();
  const { id } = useParams();
  // const spoilerAlert = comment.checked;
  const [spoilerAlert, setSpoilerAlert] = useState(comment.checked);
  const canView = comment.checked === true;

  const deleteComment = (commentId) => {
    if (window.confirm("Czy na pewno chcesz usunąć ten komentarz?")) {
      axios.delete(`http://localhost:5000/books/${id}/comments`,
        {
          data: {
            commentId: commentId,
          }
        });
    }
  };


  function changeClass() {
    setSpoilerAlert(false);
  }


  return (
    <section className="commentSec">
      <div className="commentUserName">{comment.fullName}</div>
      <div className="commentDate">
        {time}
      </div>
      <div>
        {spoilerAlert ?
          <div className="spoilerComment commentText" onClick={() => changeClass()}>"Uwaga Spoiler! Ten komentarz może zawierać treści zdradzające fabułę."</div>
          : <div className="regularComment commentText">{comment.text}
          </div>}
      </div>
      <div className="commentActions">
        {canDelete && <div className="commentActionsBtn" onClick={() => deleteComment(comment._id)}>Usuń</div>}
        {/* {canView && <div className="commentActionsBtn"onClick={() => changeTest(spoilerAlert)}>Chcę przeczytać</div>} */}
      </div>
    </section>
  );
};
export default Comment;
