import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import Toolbar from './components/Toolbar';
import Task from './components/Task';

const LOCAL_STORE_NAME = 'todo-state';

const App = () => {
  const [tasks, setTasks] = useState(localStorage[LOCAL_STORE_NAME]
    ? JSON.parse(localStorage[LOCAL_STORE_NAME]).tasks
    : []);

  const addHandler = (values) => {
    const id = uuid();
    setTasks([...tasks, { ...values, id }]);
  };

  const removeHandler = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  useEffect(() => {
    localStorage[LOCAL_STORE_NAME] = JSON.stringify({ tasks });
  }, [tasks]);

  return (
    <div>
      <Toolbar
        addHandler={values => addHandler(values)}
      />
      <div className="d-flex flex-wrap align-items-start">
        {tasks.map(el => (
          <Task
            key={el.id}
            removeHandler={id => removeHandler(id)}
            {...el}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
