import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function Registration() {
    const [username, setUserName] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function ClearInput() {
        setUserName("");
        setEmailAddress("");
        setPassword("");
    }
    async function UserPost() {
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": password
        }
        const response = await axios.post(`http://localhost:5000/user-register`, userDetails).then(()=> {Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Submitted Successfully',
            showConfirmButton: false,
            timer: 1000
        });
        ClearInput()})
        // console.log(response);
        .catch((err)=>Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: `${err.message}`,
            showConfirmButton: false,
            timer: 1000
        }));
      
        

    }

    return (
        <div>
            <Container style={{ padding: "10%" }}>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div >
    );
}

export default Registration;