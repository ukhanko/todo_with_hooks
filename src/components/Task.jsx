import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({
  title,
  content,
  id,
  removeHandler,
}) => {
  const [isShow, setIsShow] = useState(true);
  const bodyClasses = `card-body collapse ${isShow ? 'show' : ''}`;
  return (
    <div
      className="card m-2"
      style={{ width: '200px' }}
    >
      <div
        className="card-header text-white bg-primary"
        onClick={() => setIsShow(!isShow)}
      >
        <div className="row">
          <span className="col-9">
            {title}
          </span>
          <div className="col-3 d-flex justify-content-end">
            <button
              type="button"
              className="close"
              onClick={() => removeHandler(id)}
            >
              <span>&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div className={bodyClasses}>
        {content}
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Task;
