import React from 'react';
import uuid from 'uuid/v4';
import Toolbar from './components/Toolbar';
import Task from './components/Task';

const LOCAL_STORE_NAME = 'todo-state';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    const state = (localStorage[LOCAL_STORE_NAME])
      ? JSON.parse(localStorage[LOCAL_STORE_NAME])
      : {};
    this.setState(state);
  }

  addHandler(values) {
    const { tasks } = this.state;
    const id = uuid();
    this.setState(
      { tasks: [...tasks, { ...values, id }] },
      () => {
        localStorage[LOCAL_STORE_NAME] = JSON.stringify(this.state);
      },
    );
  }

  removeHandler(id) {
    const { tasks } = this.state;
    this.setState(
      { tasks: tasks.filter(task => task.id !== id) },
      () => {
        localStorage[LOCAL_STORE_NAME] = JSON.stringify(this.state);
      },
    );
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Toolbar
          addHandler={values => this.addHandler(values)}
        />
        <div className="d-flex flex-wrap align-items-start">
          {tasks.map(el => (
            <Task
              key={el.id}
              removeHandler={id => this.removeHandler(id)}
              {...el}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
