import { Likes } from "./Likes";
import React, { useState } from "react";

export const Answer = (props) => {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState("");

  const accesingTheValue = (e) => {
    setValue(e.target.value);
  };

  const submission = (e) => {
    e.preventDefault();
    setComment(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={submission}>
        <input
          type="text"
          name="comment"
          value={value}
          onChange={accesingTheValue}
        />
        <button>Add comment</button>
      </form>
      {comment !== "" ? (
        <>
          <p>{comment}</p>
          <Likes />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
