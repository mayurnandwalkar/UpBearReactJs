import React,{ useState,useEffect } from 'react'
import Bitcoin from "../assets/image/bitcoin-btc-logo.svg"
import RedGraph from "../assets/image/red_graph.svg"
import Ethereum from "../assets/image/ethereum.svg"
import GreenGraph from "../assets/image/green_graph.svg"
import Solana from "../assets/image/solana-sol-logo.svg"
import Binance from "../assets/image/binance-usd-busd-logo.svg"
import coinService from '../services/coin.service'

const Earn = () => {
    const [coinDetails, setCoinDetails] = useState([])
    const [lastApiCall, setLastApiCall] = useState(null);
    const recurringFunction = async (setdata=false) => {
        if(setdata){
            const response1 = await coinService.setCoinsDetails();
        }
        const response = await coinService.getCoinsDetails();
        setCoinDetails(response.data.data)
    }
    useEffect(() => {
        coinService.getCoinsDetails().then((response) => {
            setCoinDetails(response.data.data)
            const storedTimestamp = new Date(Date.parse(response.data.data[3].updatedAt));
            if (storedTimestamp) {
                setLastApiCall(storedTimestamp);
            }
        }).catch((e) => {
            console.log(e.response.data.message)
        })        
    }, []);
    useEffect(() => {
        console.log("first1")
        const currentTime = new Date();
        const timeDifference = currentTime - lastApiCall;
        console.log(lastApiCall,"lastApiCall")
        console.log(timeDifference,"timeDifference >= 3000")
        if (lastApiCall === null || timeDifference >= 3000) {
            console.log("first2")
            recurringFunction(true);
            setLastApiCall(currentTime);
        }
        const intervalId = setInterval(() => {
            recurringFunction(true);
            setLastApiCall(new Date());
        }, 3000);
        return () => clearInterval(intervalId);
    }, [lastApiCall]);
    return (
        <>
            <section className="earn-section section">
                <div className="container ">
                    <div className="row align-items-center ">
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="section-title">
                                <h2>
                                    Discover and earn up to $10 worth of crypto
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="section-sub-title">
                                <p className="lead ">Discover and learn how specific cryptocurrencies work. And get the amazing earn to try out for yourself</p>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="earn-section-table">
                                <div className="table-responsive">
                                    <table className="table" id="earnTable">
                                        <thead>
                                            <tr>
                                                <th width="450px"> Name </th>
                                                <th> Price </th>
                                                <th> 24 change </th>
                                                <th> 7D Chart </th>
                                                <th> Trade </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                coinDetails.map((coinDetail,i) =>
                                                    <tr key={i}>
                                                        <td>
                                                            <div className="tableName">
                                                                {i+1} <img src={coinDetail.icon} alt="bitcoin"  className="tableIcon" /> {coinDetail.name} <span>{coinDetail.symbol}</span>
                                                            </div>
                                                        </td>
                                                        <td>${coinDetail.price}</td>
                                                        <td><span className="text-green"> {coinDetail.price24h>0?"+":"-"}{coinDetail.price24h}% </span></td>
                                                        <td>
                                                            <div className="graph_img">
                                                                <img src={RedGraph} alt="red_graph" />
                                                            </div>
                                                        </td>
                                                        <td><a href="#" className="buy_btn">Buy</a></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* don't remove */}
                            {/* <div className="earn-section-image">
                                <img src={table2} alt="table1" className="img-fluid">
                            </div> */}
                            {/* don't remove */}
                        
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Earn