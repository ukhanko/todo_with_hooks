import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo } from '../container/actions';

const mapStateToProps = (state, props) => ({
  taskUI: { ...state.tasksUI.find(el => el.id === props.id) },
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTodo(id)),
});

const Task = ({
  taskUI,
  toggleTask,
  title,
  content,
  id,
  removeHandler,
}) => {
  const { isShow } = taskUI;
  const bodyClasses = `card-body collapse ${isShow ? 'show' : ''}`;
  return (
    <div
      className="card m-2"
      style={{ width: '200px' }}
    >
      <div
        className="card-header text-white bg-primary"
        onClick={() => toggleTask(id)}
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
  taskUI: PropTypes.shape({
    isShow: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
