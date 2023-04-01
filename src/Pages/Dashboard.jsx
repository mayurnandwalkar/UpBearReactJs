import React,{ useState,useEffect } from 'react'
import Header from '../CommonComponent/Header'
import Footer from '../commoncomponent/Footer'
import { useNavigate } from 'react-router'
import Table from '../CommonComponent/Table'
import MOCK_DATA2 from '../CommonComponent/MOCK_DATA2.json'
import coinService from '../services/coin.service'
const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        var saved = localStorage.getItem('user')
        // console.log(saved)
        const initial = saved !== null ? JSON.parse(saved) : "";
        if (!initial) {
            navigate("/login")
        }else{
            const submitPayload = {
                userid:JSON.parse(saved).id
            };
            coinService.getFavCoins(submitPayload).then((response) => {
                console.log(response.data, "response")
            }).catch((e) => {
                console.log(e.response.data.message);
                // toast.error(e.response.data.message);
            })
        }
    }, [])
    const handleRowToggle = async (row, e) => {
        const id = row.value;
        const newSelectedRows = [...selectedRows];
        console.log(e.target.checked)
        if (e.target.checked) {
            newSelectedRows.push(id);
            console.log(newSelectedRows)
        } else {
            const index = newSelectedRows.indexOf(id);
            if (index > -1) {
                newSelectedRows.splice(index, 1);
            }
        }
        setSelectedRows(newSelectedRows);
        if (e.target.checked) {
            try {
                const submitPayload = {
                    favcoins: id,
                    userid:JSON.parse(localStorage.getItem('user')).id
                };
                coinService.addFavCoins(submitPayload).then((response) => {
                    console.log(response, "response")
                }).catch((e) => {
                    console.log(e.response.data.message);
                    // toast.error(e.response.data.message);
                })
            } catch (error) {
                console.error(error);
            }
        }
    };
    const COLUMNS = [
        {
            Header: '#',
            accessor: 'id',
            Cell: ({ value }) => {
              return (
                <input
                  type="checkbox"
                  checked={selectedRows.includes(value)}
                  onChange={(e) => handleRowToggle({ value }, e)}
                />
              );
            },
        },
        {
            Header: 'Coin Name',
            accessor: (row) => (
                <div style={{ "display": "flex","alignItems":"center" }}>
                    <img style={{ "marginRight": "24px" }} src={row.image} alt={row.name} width="46" height="46"/>
                    <span>{row.name}/{(row.symbol).toUpperCase()}</span>
                </div>
            ),
        },
        {
            Header: 'Coin Price',
            accessor: 'current_price',
            Cell: ({value}) => {
                return (
                    <span>{"$"+value}</span>
                );
            }
        },
        {
            Header: '24 %',
            accessor: 'price_change_24h',
            Cell: ({value}) => {
                return (
                    <p style={{ color: value > 0 ? "green" : "red" }}>
                        {value > 0 ? "+$": "-$" }{Math.abs(value)}
                    </p>
                );
            }
        },
        {
            Header: () => {
                return (
                    <span>24 <span style={{"fontSize" : "11px" }}>high</span></span>
                );
            },
            accessor: 'high_24h',
            Cell: ({value}) => {
                return (
                    <span>{"$"+value}</span>
                );
            }
        },
        {
            Header: () => {
                return (
                    <span>24 <span style={{"fontSize" : "11px" }}>Low</span></span>
                );
            },
            accessor: 'low_24h',
            Cell: ({value}) => {
                return (
                    <span>{"$"+value}</span>
                );
            }
        }
    ]
    // const [cryptoData, setCryptoData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //         const response = await axios.get(
    //             'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&page=1'
    //         );
    //         setCryptoData(response.data);
    //         } catch (error) {
    //         console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    return (
        <>
            <Table column={COLUMNS} data={MOCK_DATA2}/>
        </>
    )
}

export default Dashboard