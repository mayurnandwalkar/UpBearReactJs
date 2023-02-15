import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-form">
                        <p className="footer__title">Subscribe to our newsletters.</p>
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
                        {/* <a href="#" className="footer__icon"><i className='bx bxl-linkedin'></i></a> */}
                        <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
                        {/* <a href="#" className="footer__icon"><i className='bx bxl-youtube'></i></a> */}
                        {/* <a href="#" className="footer__icon"><i className='bx bxl-whatsapp'></i></a> */}
                        <a href="#" className="footer__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{"fill": "#fff"}}><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer