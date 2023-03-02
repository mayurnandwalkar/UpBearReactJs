import React,{ useState,useEffect } from 'react'
// import Bitcoin from "../assets/image/bitcoin-btc-logo.svg"
import RedGraph from "../assets/image/red_graph.svg"
// import Ethereum from "../assets/image/ethereum.svg"
// import GreenGraph from "../assets/image/green_graph.svg"
// import Solana from "../assets/image/solana-sol-logo.svg"
// import Binance from "../assets/image/binance-usd-busd-logo.svg"
import coinService from '../services/coin.service'
import axios from "axios";

const Earn = () => {
    const [coinDetails, setCoinDetails] = useState();
    const [LastCall, setLastCall] = useState();
    useEffect(() => {
        coinService.getCoinsDetails().then((response) => {
            setCoinDetails(response.data.data)
            const LastCall = (Date.parse(response.data.data[3].updatedAt)+60000);
            if (LastCall) {
                const currentTime = Date.parse(new Date());
                const timeDifference = currentTime-LastCall;
                if (LastCall === null || timeDifference >= 60000) {
                    console.log('currentTime')
                    const intervalId = setInterval(() => {
                        async function selfcall() {
                            const response1 = await coinService.setCoinsDetails();
                            const response = await coinService.getCoinsDetails();
                            // console.log(response)
                            setCoinDetails(response.data.data)
                        }
                        selfcall()
                    }, 60000);

                    return () => clearInterval(intervalId);
                }
            }
        }).catch((e) => {
            console.log(e.response.data.message)
        }) 
    }, [LastCall]);
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
                                                {/* <th> 7D Chart </th> */}
                                                <th> Trade </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                coinDetails?.map((coinDetail,i) =>
                                                    <tr key={i}>
                                                        <td>
                                                            <div className="tableName">
                                                                {i+1} <img src={coinDetail.icon} alt="bitcoin"  className="tableIcon" /> {coinDetail.name} <span>{coinDetail.symbol}</span>
                                                            </div>
                                                        </td>
                                                        <td>${coinDetail.price}</td>
                                                        <td><span className={coinDetail.price24h>=0?"text-success":"text-danger"}> {coinDetail.price24h}% </span></td>
                                                        {/* <td>
                                                            <div className="graph_img">
                                                                <img src={RedGraph} alt="red_graph" />
                                                            </div>
                                                        </td> */}
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