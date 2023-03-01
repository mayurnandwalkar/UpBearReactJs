import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import authService from "../services/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [isChecked_email_marketing, setIsChecked_email_marketing] = useState(false);
    const [isChecked_terms_condition, setIsChecked_terms_condition] = useState(false);
    const [registrationFormInputes, setregistrationFormInputes] = useState({
        username: "",
        email: "",
        password: "",
        email_marketing:"",
        terms_condition: ""
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        console.log(name)
        if(name=="email_marketing"){
            setIsChecked_email_marketing(!isChecked_email_marketing);
            console.log(!isChecked_email_marketing)
            setregistrationFormInputes({...registrationFormInputes, [name]: !isChecked_email_marketing?"yes":"" });
        } else if(name=="terms_condition"){
            setIsChecked_terms_condition(!isChecked_terms_condition);
            setregistrationFormInputes({...registrationFormInputes, [name]: !isChecked_terms_condition?"yes":"" });
        }else{
            setregistrationFormInputes({...registrationFormInputes, [name]: value });
        }
    };

    const HandleCreateAccountButton = (e) => {
        e.preventDefault();
        const submitPayload = {
            username: registrationFormInputes.username,
            email: registrationFormInputes.email,
            password: registrationFormInputes.password,
            email_marketing: registrationFormInputes.email_marketing,
            terms_condition: registrationFormInputes.terms_condition,
        };
        console.log(submitPayload, "submitPayload");
        // setregistrationFormInputes({ ...registrationFormInputes, [name]: value })
        const data = {
            username:"chintanuser",
            email:"chintanuser@gmail.com",
            password:"chintan123"
        }
        console.log("firstcall")
        authService.register(submitPayload).then((response) => {
            console.log(response, "response")
            navigate('/login');
        }).catch((e) => {
            toast.error(e.response.data.message);
        })
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <section className="signup_section form_section">
                <div className="form_main">
                <h2 className="title">Sign up</h2>
                <form action="" className="form-box">
                    <div className="form-inner">
                    <div className="form-title">
                        <h3>Create Account</h3>
                    </div>
                    <div className="login_via">
                        <ul>
                        <li>
                            <a href="#">
                            <i className="bx bxl-google"></i>
                            Google
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="bx bxl-facebook"></i>
                            Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "#fff" }}
                            >
                                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
                            </svg>
                            Discord
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="form-inputs">
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={registrationFormInputes.username}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={registrationFormInputes.email}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={registrationFormInputes.password}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="radio">
                        <input id="radio-1" name="email_marketing" type="checkbox" onChange={handleInputChange} defaultValue="yes" checked={isChecked_email_marketing}/>
                        <label forhtml="radio-1" className="radio-label">
                            <span>
                            I am interested in receiving marketing emails with
                            information about upcoming promotions, events, and new
                            feature updates
                            </span>
                        </label>
                        </div>
                        <div className="radio">
                        <input id="radio-2" name="terms_condition" type="checkbox" onChange={handleInputChange} defaultValue="yes" checked={isChecked_terms_condition}/>
                        <label forhtml="radio-2" className="radio-label">
                            <span>
                            I have read and agree to the website terms and conditions
                            </span>
                        </label>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary btn-lg px-4 me-md-2"
                        onClick={HandleCreateAccountButton}
                    >
                        Register Now
                    </button>
                    <div className="have_account">
                        Have an account? <Link to="/login"> Login Now </Link>
                    </div>
                    </div>
                </form>
                </div>
            </section>
        </>
    );
};

export default Register;
