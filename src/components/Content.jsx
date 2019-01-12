import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Content = ({ tasks, removeHandler }) => (
  <div className="d-flex flex-wrap align-items-start">
    {tasks.map(el => (
      <Task
        key={el.id}
        removeHandler={removeHandler}
        {...el}
      />
    ))}
  </div>
);

Content.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Content;
