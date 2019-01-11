import React from 'react';
import PropTypes from 'prop-types';

class TaskAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state);
  }

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div className="form-row m-2">
          <input
            value={title}
            name="title"
            className="form-control col-4 mr-1"
            placeholder="Title"
            type="text"
            onChange={event => this.handleInputChange(event)}
          />
          <input
            value={content}
            name="content"
            className="form-control col-4 mr-2"
            placeholder="Content"
            type="text"
            onChange={event => this.handleInputChange(event)}
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            {'Add'}
          </button>
        </div>
      </form>
    );
  }
}

TaskAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskAdd;
