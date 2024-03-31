import React from "react";
import del from "./images/delete-icon.svg";
import x from "./images/red-x-line-icon.svg";
import tick from "./images/tick-mark-icon.svg";
export default function Main() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="main px-2">
          <h1 className="h2 text-center py-1">Todo</h1>
          <form className="form-todo d-flex justify-content-between py-2">
            <input
              type="text"
              className="rounded"
              name="input task"
              id="input-task"
              placeholder=" Write there..."
            />
            <button type="submit" className="px-2 mx-2 btn btn-outline-info">
              Add
            </button>
          </form>
          <hr className="mx-2" />
          <ul className="list-group">
            <li className="list-group-items d-flex justify-content-between rounded ">
              <h3 className="list-item-title h5">Object1</h3>
              <div className="icons">
                <img src={tick} alt="done" />
                <img src={x} alt="undone" />
                <img src={del} alt="delete" />
              </div>
            </li>
            <li className="list-group-items d-flex justify-content-between rounded  list-group-item-success">
              <h3 className="list-item-title h5">Object2</h3>
              <div className="icons">
                <img src={tick} alt="done" />
                <img src={x} alt="undone" />
                <img src={del} alt="delete" />
              </div>
            </li>
            <li className="list-group-items d-flex justify-content-between rounded ">
              <h3 className="list-item-title h5">Object3</h3>
              <div className="icons">
                <img src={tick} alt="done" />
                <img src={x} alt="undone" />
                <img src={del} alt="delete" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
