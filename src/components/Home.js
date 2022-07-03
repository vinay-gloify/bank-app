import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransactionHistory from './TransactionHistory';


const Home = () => {
    const [depositData, setDepositData] = useState([]);
    const [withdrawalData, setWithDrawalData] = useState([]);
    const [balance, setBalance] = useState(0);
    const [mergeData, setMargeData] = useState([]);

    const deposit = (value) => {
        setDepositData([...depositData, value]);
    }

    const withdrawal = (value) => {
        setWithDrawalData([...withdrawalData, value]);
    }

    useEffect(() => {
        setMargeData([])
        setBalance(0)
        const mergedData = [...depositData, ...withdrawalData];
        setMargeData(mergedData);

        mergedData.map(myFunction)

        function myFunction(num) {
            if (num.credit) {
                setBalance((prev) => {
                    return prev + parseInt(num.credit)
                });
            }
            else if (num.debit) {
                setBalance((prev) => {
                    return prev - parseInt(num.debit)
                });
            }
            else {
                console.log('no data');
            }
        }
    }, [depositData, withdrawalData])


    return (
        <div>
            <Dashboard total={balance} />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Deposit depositHandler={deposit} />
                <Withdraw withdrawalHandler={withdrawal} />
            </div>
            <TransactionHistory passBookData={mergeData} total={balance} />
        </div>
    )
}

export default Home;