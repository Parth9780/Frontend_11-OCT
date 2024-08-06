import React, { useEffect, useState } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState();
    // fetch all dynamic data
    useEffect(() => {
        // fetch data here
        axios.get(`http://localhost:3001/add-data`).then((response) => {
            setData(response.data);
        })

    }, []);

    return (
        <>
            <div className="BackClass">
                <Container className="p-5 w-75 mx-auto shadow TopClass">
                    <h3>React js CRUD(create | read |Update | delete)</h3>
                    <hr className="w-50 border border-1 border-dark" />
                    <Link to='/create-data'><Button type="button" className="mt-3 btn btn-md btn-dark text-white">Add Data <span className="fa fa-person"></span></Button></Link>

                    {/* show all data */}
                    <Table className="table table-responsive mt-3 w-100">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Pincode</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* applied loop map */}
                            {data && data.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.address}</td>
                                            <td>{item.pincode}</td>
                                            <td><Button type="button" className="btn btn-sm bg-white"><span className="bi bi-trash text-danger"></span></Button> | <Link to="/edit-data"><Button type="button" className="btn btn-sm bg-white"><span className="bi bi-pencil text-primary"></span></Button></Link></td>
                                        </tr>

                                    </>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}
export default Home