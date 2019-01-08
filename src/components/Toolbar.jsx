import React from 'react';

const Toolbar = () => (
  <div className="border-bottom">
    <div className="m-2 d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-primary mr-1"
      >
        {'Create'}
      </button>
      <button
        type="button"
        className="btn btn-danger"
      >
        {'Remove'}
      </button>
    </div>
  </div>
);

export default Toolbar;
