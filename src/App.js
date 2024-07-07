
import React, { useState } from 'react';
import './App.css';
import PostsDisplay from './components/PostDisplay';
import CreatePost from './components/Createpost';

function App() {
  const [postToEdit, setPostToEdit] = useState(null);

  const handleEdit = (post) => {
    setPostToEdit(post);
  };

  const handleSubmit = () => {
    setPostToEdit(null);
  };

  return (
    <div className="App">
      <h1>WYLO Posts</h1>
      <CreatePost postToEdit={postToEdit} onSubmit={handleSubmit} />
      <PostsDisplay onEdit={handleEdit} />
    </div>
  );
}

export default App;