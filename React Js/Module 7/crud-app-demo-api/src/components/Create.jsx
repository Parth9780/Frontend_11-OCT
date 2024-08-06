import React, { useState, useRef } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Creat() {
    const [flash, setFlash] = useState("");

    const name = useRef("");
    const email = useRef("");
    const phone = useRef("");
    const address = useRef("");
    const pincode = useRef("");
    const Navigate = useNavigate();

    const AddFormData = (e) => {
        e.preventDefault();
        var ins = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
            pincode: pincode.current.value
        }

        axios.post(`http://localhost:3001/add-data`, ins).then(() => {
            // pass a message for insert data
            Swal.fire({
                title: "Wow!",
                text: "Thanks for added Data!",
                icon: "success"
            });

            Navigate('/');

        })

        e.target.reset();

    }

    return (
        <>
            <Container className="p-5 mt-5 w-75 mx-auto shadow">
                <Row>
                    <div className="col-md-5">
                        <img src="https://static.vecteezy.com/system/resources/previews/011/153/366/large_2x/3d-web-developer-working-on-project-illustration-png.png" alt="create" className="img-fluid" />
                    </div>

                    <div className="col-md-7">
                        <h3 className="GFont">Add Data here</h3>
                        <hr className="w-50 border border-1 border-dark" />
                        <Form onSubmit={AddFormData}>
                            <div className="form-group mt-3">
                                <input type="text" ref={name} placeholder="Name *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" ref={email} placeholder="Email *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" ref={phone} placeholder="Phone *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" ref={address} placeholder="Address *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" ref={pincode} placeholder="PinCode *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="submit" name="adddata" value="Add Data" className="btn bg-dark text-white btn-md" />
                            </div>
                        </Form>
                    </div>
                </Row>

            </Container>
        </>
    )
}
export default Creat