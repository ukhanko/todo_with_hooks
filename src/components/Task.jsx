import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, content }) => (
  <div className="card col-3 m-2">
    <div className="card-header text-white bg-primary">
      {title}
    </div>
    <div className="card-body">
      {content}
    </div>
  </div>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Task;
