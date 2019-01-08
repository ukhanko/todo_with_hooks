import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Content = ({ tasks }) => (
  <div className="d-flex">
    {tasks.map(el => (
      <Task
        key={el.id}
        {...el}
      />
    ))}
  </div>
);

Content.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Content;
