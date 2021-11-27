import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, shouldSubmit }) => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function contentChange(e) {
    setContent(e.target.value);
  }

  function dateChange(e) {
    setDate(e.target.value);
  }

  function timeChange(e) {
    setTime(e.target.value);
  }

  function addMemo() {
    shouldSubmit.current = true;
    add(function (prev) {
      return [
        ...prev,
        {
          id: v4(),
          content,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div>
      <h1> Memo </h1>
      <p>Content: </p>
      <input type="text" value={content} onChange={contentChange} />
      <p>Date: </p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time: </p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addMemo}>
        New
      </button>
    </div>
  );
};

export default Edit;
