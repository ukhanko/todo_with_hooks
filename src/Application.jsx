import React from 'react';
import uuid from 'uuid/v4';
import Toolbar from './components/Toolbar';
import Content from './components/Content';

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

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Toolbar
          addHandler={values => this.addHandler(values)}
        />
        <Content tasks={tasks} />
      </div>
    );
  }
}

export default App;
