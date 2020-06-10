// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props); //returns comments[] with keys of "username" and "text"
  const [getComments, loadComments] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */
        getComments.map(function(currentComment, commentIndex) {
          return <Comment key={commentIndex} comment={currentComment} />;
        })
      }
      <CommentInput getComments={getComments} loadComments={loadComments} />
    </div>
  );
};

export default CommentSection;
