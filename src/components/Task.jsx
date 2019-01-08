import React from 'react';

export default task => (
  <div className="card col-3 m-2">
    <div className="card-header text-white bg-primary">
      {task.title}
    </div>
    <div className="card-body">
      {task.content}
    </div>
  </div>
);
