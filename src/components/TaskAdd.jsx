import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskAdd = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({ title, content });
    }}
    >
      <div className="form-row m-2">
        <input
          value={title}
          name="title"
          className="form-control col-4 mr-1"
          placeholder="Title"
          type="text"
          onChange={event => setTitle(event.target.value)}
        />
        <input
          value={content}
          name="content"
          className="form-control col-4 mr-2"
          placeholder="Content"
          type="text"
          onChange={event => setContent(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title || !content}
        >
          {'Add'}
        </button>
      </div>
    </form>
  );
};

TaskAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskAdd;
