import React from 'react';
import Task from './Task';

const Content = () => {
  const todos = [
    {
      id: 1,
      title: 'First',
      content: 'Should must be done',
    },
    {
      id: 2,
      title: 'Second',
      content: 'Not necessary',
    },
  ];
  return (
    <div className="d-flex">
      {todos.map(el => (
        <Task
          key={el.id}
          {...el}
        />
      ))}
    </div>
  );
};

export default Content;
