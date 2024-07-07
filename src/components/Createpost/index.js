import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Createpost = ({ postToEdit, onSubmit }) => {
  const [title, setTitle] = useState(postToEdit ? postToEdit.title : '');
  const [content, setContent] = useState(postToEdit ? postToEdit.content : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      const post = postToEdit
        ? { ...postToEdit, title, content }
        : { id: Date.now(), title, content };
      
      dispatch({
        type: postToEdit ? 'EDIT_POST' : 'ADD_POST',
        payload: post,
      });

      setTitle('');
      setContent('');
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{postToEdit ? 'Update Post' : 'Create Post'}</button>
    </form>
  );
};

export default Createpost;