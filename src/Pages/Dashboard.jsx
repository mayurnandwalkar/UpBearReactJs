import React,{ useState,useEffect } from 'react'
import Header from '../CommonComponent/Header'
import Footer from '../commoncomponent/Footer'
import { useNavigate } from 'react-router'
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        var saved = localStorage.getItem('user')
        const initial = saved !== null ? JSON.parse(saved) : "";
        if (!initial) {
            navigate("/login")
        }
    }, [])
    return (
        <>
            <Header/>
            <h1>Welcom to Dashboard</h1>
            <Footer/>
        </>
    )
}

export default Dashboard