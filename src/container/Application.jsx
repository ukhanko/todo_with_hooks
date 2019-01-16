import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../components/Toolbar';
import Content from '../components/Content';
import { addTodo, removeTodo } from './actions';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: values => dispatch(addTodo(values)),
  removeTask: id => dispatch(removeTodo(id)),
});

const App = ({ tasks, addTask, removeTask }) => (
  <div>
    <Toolbar
      addHandler={addTask}
    />
    <Content
      tasks={tasks}
      removeHandler={removeTask}
    />
  </div>
);

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
