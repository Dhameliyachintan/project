import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoogleLoginButton } from "react-social-login-buttons";
import { signInWithPopup } from "firebase/auth";
import { Toast } from 'bootstrap';
import { auth, provider } from '../Firebase.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Forms() {
    const navigate =  useNavigate()

    const onSubmithandler = (e) => {
        e.preventDefult()
    }

    // const { email, Password } = (e) => {
    //     email: e.target.email.value,
    //     Password: e.target.password.value
    // }

    const handlelogin = async () => {
        try {
            const data = await signInWithPopup(auth, provider)
            console.log("data++", data);
            const user = {
                email: data.user.email,
                Password: data.user.Password
            }

            localStorage.setItem("user", JSON.stringify(user))
            toast.success("login successfull")
            navigate("Order")
        } catch (error) {
            toast.error(new Error(error).message)
        }

    }
    return (
        <div className="container">
            <div className="row col-md-4 mx-auto my-5">
                <Form onSubmit={onSubmithandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <GoogleLoginButton onClick={() => handlelogin()} />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Forms;