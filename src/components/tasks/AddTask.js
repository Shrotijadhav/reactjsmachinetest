import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddTask = () => {
  let history = useHistory();
  const [user, setUser] = useState({


  userId:"",
  id:"",
  title: "",
  completed: "",
     
  });

  const { userId,id,title,completed } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">AddTask</h2>
        <form onSubmit={e => onSubmit(e)}>
           

        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="userId"
              name="userId"
              value={userId}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="completed"
              className="form-control form-control-lg"
              placeholder="completed"
              name="completed"
              value={completed}
              onChange={e => onInputChange(e)}
            />
          </div>
           
           
          <button className="btn btn-primary btn-block">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
