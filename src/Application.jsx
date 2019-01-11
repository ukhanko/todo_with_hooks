import React from 'react';
import Toolbar from './components/Toolbar';
import Content from './components/Content';

class App extends React.Component {
  static addHandler(values) {
    console.log('values: ', values);
  }

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      // tasks: [
      //   {
      //     id: 1,
      //     title: 'First',
      //     content: 'Should must be done',
      //   },
      //   {
      //     id: 2,
      //     title: 'Second',
      //     content: 'Not necessary',
      //   },
      // ],
    };
  }

  componentDidMount() {
    const state = (localStorage['todo-state'])
      ? JSON.parse(localStorage['todo-state'])
      : {};
    this.setState(state);
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Toolbar
          addHandler={App.addHandler}
        />
        <Content tasks={tasks} />
      </div>
    );
  }
}

export default App;
