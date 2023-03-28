import React from 'react';
import './SavedPost.css';

function SavedPost(props) {
  return (
    <div className="saved-post">
      <div className="saved-post-header">
        <img src={props.profilePicture} alt="Profile" className="saved-post-profile-picture" />
        <span className="saved-post-username">{props.username}</span>
      </div>
      <div className="saved-post-content">
        <p className="saved-post-text">{props.postText}</p>
        <div className="saved-post-actions">
          <button className="saved-post-like-button" onClick={props.onLikeClick}>
            <i className="fas fa-heart"></i> {props.likes}
          </button>
          <button className="saved-post-comment-button" onClick={props.onCommentClick}>
            <i className="fas fa-comment"></i> {props.comments}
          </button>
          <button className="saved-post-save-button" onClick={props.onSaveClick}>
            <i className="far fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedPost;
