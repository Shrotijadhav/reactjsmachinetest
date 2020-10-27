import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Task = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
         
        <table class="table border shadow">
          
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.completed}</td>
                <td>
                   
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          
          <Link className="btn btn-primary" to= "/tasks/add">Add Task</Link>
        </table>
      </div>
    </div>
  );
};

export default Task;
