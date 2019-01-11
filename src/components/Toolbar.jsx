import React from 'react';
import PropTypes from 'prop-types';
import TaskAdd from './TaskAdd';

const Toolbar = ({ addHandler }) => (
  <div className="border-bottom">
    <TaskAdd
      onSubmit={addHandler}
    />
  </div>
);

Toolbar.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default Toolbar;
