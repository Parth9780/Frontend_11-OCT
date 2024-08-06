import React from "react";
import { useEffect, useState, useRef } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, Row, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  // display all added abstract data
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    // fetch api 
    axios.get(`http://localhost:8000/add%20task`).then((response) => {
      setData(response.data);
    })

  }, [data]);

  const task = useRef("");
  const priority = useRef("");
  const date = useRef("");

  const AddData = (e) => {
    e.preventDefault();
    var ins = {
      task: task.current.value,
      priority: priority.current.value,
      date: date.current.value,

    }
    axios.post(`http://localhost:8000/add%20task`, ins).then(() => {
      // pass a message for insert data
      Swal.fire({
        title: "Wow!",
        text: "Thanks for added Data!",
        icon: "success"
      });

    })

    // display all added abstract data
    const [data, setData] = useState();
    const { id } = useParams();
    useEffect(() => {
      // fetch api 
      axios.get(`http://localhost:4000/add-abstract`).then((response) => {
        setData(response.data);
      })

    }, [data]);
    e.target.reset();
  }

  return (
    <>
      <div className="w-full">
        <Row>
          <div className="col-md-12 titel">
            <h1>Task Scheduler</h1>
          </div>
          <div className="col-md-6 text-center pt-5">
            <img src="https://cdn-icons-png.flaticon.com/512/762/762686.png" className="img-fluid task-img
            " alt="" />
          </div>
          <div className="col-md-6 mt-5">
            <form onSubmit={AddData}>
              <div className="col-md-7">
                <label htmlFor="validationCustom01" className="form-label fs-5">
                  Task *
                </label>
                <input
                  type="text"
                  className="form-control fs-5"
                  id="validationCustom01"
                  required=""
                  ref={task}
                />
              </div>
              <div className="col-md-7 pt-4">
                <label htmlFor="validationCustom04" className="form-label fs-5">
                  Priority *
                </label>
                <select className="form-select fs-5" id="validationCustom04" required=""
                  ref={priority}>
                  <option>
                    High Priority
                  </option>
                  <option>Low Priority</option>
                </select>
              </div>
              <div className="col-md-7 pt-4">
                <label htmlFor="validationCustom01" className="form-label fs-5">
                  Deadline *
                </label>
                <input
                  type="date"
                  className="form-control fs-5"
                  id="validationCustom01"
                  ref={date}
                  required=""
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="d-grid gap-2 col-7 mt-5">
                <button className="btn btn-outline-success fs-5" type="submit">
                  Add Task
                </button>
              </div>
            </form>

          </div>
          <div className="col-md-10 mx-auto">
            {/* display abstract */}
            <table className='table table-responsive p-3 mt-5 table-bordered'>
              <tr>
                <th>#id</th>
                <th>Task</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
              {data && data.map((row) => {
                return (
                  <>
                    <tr>
                      <td>{row.id}</td>
                      <td>{row.task}</td>
                      <td>{row.priority}</td>
                      <td>{row.date}</td>
                      <td><div style={{ minWidth: "100px" }}>

                        <button type='button' onClick={() => { Navigate(`/admin-login/delete-abstract/${row.id}`) }} className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></button>&nbsp;
                        |
                        &nbsp;
                        <button type='button' className='btn btn-sm btn-primary bg-primary text-white'><span className='bi bi-pencil'></span></button></div></td>

                    </tr>
                  </>
                )
              })}

            </table>

          </div>
        </Row >
      </div >
    </>
  )
}
export default App