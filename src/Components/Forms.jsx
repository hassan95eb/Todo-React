import React, { useContext, useState } from "react";
import taskContext from "../TaskContext";

export default function Forms() {
  const { task, setTask } = useContext(taskContext);
  const [item, setItem] = useState("");
  const handleinput = (event) => {
    setItem(event.target.value);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    let maxId = task.length;
    setTask([...task, { id: maxId + 1, title: item }]);
    setItem("");
  };
  return (
    <>
      <h1 className="h2 text-center py-1">Todo</h1>
      <form
        className="form-todo d-flex justify-content-between py-2"
        onSubmit={handleSubmitForm}
      >
        <input
          onChange={handleinput}
          type="text"
          className="rounded"
          name="input task"
          id="input-task"
          placeholder=" Write there..."
          value={item}
        />
        <button
          type="submit"
          className="px-2 mx-2 btn btn-outline-info"
          disabled={!item}
        >
          Add
        </button>
      </form>
    </>
  );
}
