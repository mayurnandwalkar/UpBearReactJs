import React, { useState, useEffect } from "react";
import { useLocation  } from 'react-router-dom';
import authService from '../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../commoncomponent/Footer";

const ResetPassword = () => {
    const [ResetForm, setResetForm] = useState(false)
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const email = query.get('email');
    const token = query.get('token');
    useEffect(() => {
        return () => {
            if(email !== null && email !== undefined && token !== null && token !== undefined){
                const checksubmitPayload = {
                    email:email,
                    token:token
                }
                authService.verify_rp_token(checksubmitPayload).then((response) => {
                    if(response.status){
                        setResetForm(true);
                    }else{
                        setResetForm(false);
                    }
                }).catch((e) => {
                    toast.error(e.response.data.message);
                })
            }
        }
    }, [])    
    const [rpFormInputs, setrpFormInputs] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        if(ResetForm){
            setnrpFormInputs({...nrpFormInputs, [name]: value });
        }else{
            setrpFormInputs({...rpFormInputs, [name]: value });
        }
    };
    const HandleRPButton = (e) => {
        e.preventDefault();
        const submitPayload = {
            email: rpFormInputs.email,
        };
        authService.resetpassword(submitPayload).then((response) => {
            if(response.messageId){
                toast.success("Reset password link sent in your email");
            }
        }).catch((e) => {
            toast.error(e.response.data.message);
        })
    }

    const [nrpFormInputs, setnrpFormInputs] = useState({newpassword: ""})
    const HandleNRPButton = (e) => {
        e.preventDefault();
        const submitPayload = {
            email: email,
            password: nrpFormInputs.newpassword
        };
        authService.newpassword(submitPayload).then((response) => {
            toast.success(response.message);
        }).catch((e) => {
            toast.error(e.response.data.message);
        })
    }
    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
            <section className="signup_section form_section">
                <div className="form_main">
                    <h2 className="title">Reset Your Password</h2>
                    <form action="" className="form-box">
                        {ResetForm ? (
                            <div className="form-inner">
                                <div className="form-title">
                                    <h3>Change Your Password </h3>
                                </div>
                                <div className="form-inputs">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter your new password" name="newpassword" onChange={handleInputChange} value={nrpFormInputs.newpassword} />
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={HandleNRPButton}>New Password</button>
                            </div>
                        ) : (
                            <div className="form-inner">
                                <div className="form-title">
                                    <h3>Enter your email to continue </h3>
                                </div>
                                <div className="form-inputs">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" name="email" onChange={handleInputChange} value={rpFormInputs.email} />
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={HandleRPButton}>Forgot Password</button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ResetPassword