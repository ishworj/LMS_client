import React from "react";

const Book = () => {
  return (
    <div
      className="card d-flex justify-content-between align-items-center p-3 "
      style={{ maxHeight: "300px"  , maxWidth:"200px"}}
    >
      <div>
        <img src="/book1.jpg" alt="" className="w-50" />
      </div>
      <div>name</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        nemo.
      </p>
    </div>
  );
};

export default Book;
