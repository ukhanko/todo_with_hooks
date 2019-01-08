import React from 'react';

const Toolbar = () => (
  <div className="border-bottom">
    {/* <div className="m-2 d-flex justify-content-end">
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
    </div> */}
    <form>
      <div className="form-row m-2">
        <input
          type="text"
          id="title"
          className="form-control col-4 mr-1"
          placeholder="Title"
        />
        <input
          type="text"
          id="content"
          className="form-control col-4 mr-2"
          placeholder="Content"
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          {'Add'}
        </button>
      </div>
    </form>
  </div>
);

export default Toolbar;
