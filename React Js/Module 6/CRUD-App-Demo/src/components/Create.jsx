import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";

function Creat() {
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
                        <Form>
                            <div className="form-group mt-3">
                                <input type="text" name="name" placeholder="Name *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" name="name" placeholder="Email *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" name="name" placeholder="Phone *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" name="name" placeholder="Address *" className="form-control" />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" name="name" placeholder="PinCode *" className="form-control" />
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