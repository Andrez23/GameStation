import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import Swal from "sweetalert2";

export const SobreNosotros = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState ("");
  const [edit, setEdit] = useState(false);

  const addTask = () => {
    const task = {id: uuid(), title, description};
    setTasks([...tasks,task]);
    clear();
  };

  const updateTask = () => {
    const id = localStorage.getItem("id");
    const newTask = { id, title, description };
    const newTasks = tasks.map((item) => (item.id === id ? newTask : item));
    setTasks(newTasks);
    clear();
  };

  const actions = (e) => {
    e.preventDefault();
    edit ? updateTask() : addTask();
  };

  const deleteTasks = (id) => {
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: "si continuas No podrás revertir el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        Swal.fire({
          title:"Eliminado!",
          text:"Sus datos han sido eliminados.",
          icon:"success",
          showConfirmButton: false,
          timer: 1500
        
        })
      }
    })
  };

  const getData = (id) => {
    const task = tasks.find((item) => item.id === id); 
    localStorage.setItem("id", id);
    setTitle(task.title);
    setDescription(task.description);
    setEdit(true);
  };

  const clear = () => {
    setTitle("");
    setDescription("");
    setEdit(false);
    localStorage.removeItem("id");
  };

  return(
    <div className="container">
      <div className="mt-3 justify-content-center d-flex align-items-center">
        <div className="col-6">
          <div className="card">
            <h3 className="card-title text-center">CRUD</h3>
            <div className="card-body">
              <form onSubmit={actions}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    required
                    autoFocus
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    required
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary form-control" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-group list-group-numbered">
          {tasks.map((task) => (
            <li
              className="list-group-item d-flex justify-content-between aling-item-start"
              key={task.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{task.title}</div>
                {task.description}
              </div>
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteTasks(task.id)}
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                className="btn btn-warning"
                onClick={() => getData(task.id)}
              >
                <i className="fas fa-edit"></i>
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}


