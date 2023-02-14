import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-form">
                        <p className="footer__title">Subscribe to our newsletter.</p>
                        <div className="form-group">
                            <input type="text" name="newsletter" id="newsletter" className="form-control" placeholder="Enter your Email" />
                            <button type="submit" className="">
                                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.2873 8.70711C24.6778 8.31658 24.6778 7.68342 24.2873 7.29289L17.9234 0.928932C17.5328 0.538408 16.8997 0.538408 16.5091 0.928932C16.1186 1.31946 16.1186 1.95262 16.5091 2.34315L22.166 8L16.5091 13.6569C16.1186 14.0474 16.1186 14.6805 16.5091 15.0711C16.8997 15.4616 17.5328 15.4616 17.9234 15.0711L24.2873 8.70711ZM0.392578 9H23.5802V7H0.392578V9Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="footer__social">
                        <a href="#" className="footer__icon"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-linkedin'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-youtube'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-whatsapp'></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer