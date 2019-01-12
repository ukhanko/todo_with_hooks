import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  toggle() {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  }

  render() {
    const {
      title,
      content,
      id,
      removeHandler,
    } = this.props;
    const { isShow } = this.state;
    const bodyClasses = `card-body collapse ${isShow ? 'show' : ''}`;
    return (
      <div
        className="card m-2"
        style={{ width: '200px' }}
      >
        <div
          className="card-header text-white bg-primary"
          onClick={() => this.toggle()}
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
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Task;
