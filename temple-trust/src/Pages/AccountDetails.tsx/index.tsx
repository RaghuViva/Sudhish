import React, { useEffect, useState } from "react";
import { getDataFromGoogleSheet } from "../../Store/actions/worship";
import './index.css';

const AccountDetails = () => {
    const [debitData, setDebitData] = useState<any>(null);
    const [creditData, setCreditData] = useState<any>(null);

    const [debitTotal, setDebitTotal] = useState<number>(0);
    const [creitTotal, setCreitTotal] = useState<number>(0);


    const getAccountDetails = async () => {
        const debitUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIO5pvJzDtSbSk-USQ-C6eeuFMCQrvAEzvXiNnW66d_QQhn_HVas_q95EIKygOj0p0IrTX8ncUB9YE/pub?gid=0&single=true&output=csv";
        const creditUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPCk85WWbGLoB2CC5Hssqp8BjR_Cv-F8B_IvUTb90SAruuT0I7aHPEfQr4AlRGkmqZGaFccdJMbQiJ/pub?gid=0&single=true&output=csv";
        
        await getDataFromGoogleSheet(debitUrl, setDebitData);
        await getDataFromGoogleSheet(creditUrl, setCreditData);
    };

    useEffect(() => {
        getAccountDetails();
    },[]);

    console.log("debitData",debitData,"creditData",creditData )

    useEffect(() => {
        if(Array.isArray(debitData)){
            setDebitTotal(debitData.reduce((total: number, current: any )=> {
                let currentAmount = Number(current[3]);
                if(currentAmount){
                    return total + currentAmount;
                }
                return total;
            }, 0))
        }
    }, [debitData]);

    useEffect(() => {
        if(Array.isArray(creditData)){
            setCreitTotal(creditData.reduce((total: number, current: any )=> {
                let currentAmount = Number(current[3]);
                if(currentAmount){
                    return total + currentAmount;
                }
                return total;
            }, 0))
        }
    }, [debitData]);

    // console.log("AccountDetails : ", debitData, creditData);

    return (
        // <div style={{
        //     display: "flex",
        //     flexWrap: "wrap",
        //     justifyContent: "center",
        //     gap: "1rem",
        //     padding: "1rem",
        // }}>
        //     {
        //         Array.isArray(data) &&
        //         data.map((item: any, i: number) => {
        //             return (
        //                 <SlotCard
        //                     key={i}
        //                     name={item[0] || ''}
        //                     date={item[1] || ''}
        //                     image={item[2] || ''}
        //                     pooja={item[3] || ''}
        //                     time={item[4] || ''}
        //                     amount={item[5] || ''}
        //                     isAccountDetails={true}
        //                 />
        //             )
        //         })
        //     }
        // </div>
        <div>
            <h1 style={{fontSize:"2.5rem", fontWeight: "600", textAlign: "center"}}>
                {
                    (creitTotal > debitTotal) ? (
                        `Net profit =  ${creitTotal - debitTotal}`
                    ) : (
                        `Net loss =  ${debitTotal - creitTotal}`
                    )
                }
            </h1>
            <div className="AD_table_container">
                <table>
                    <thead>
                        <tr style={{fontSize: "2rem", fontWeight:"600", textAlign: "center",}}>
                            <th colSpan={4} style={{padding: "10px",}}>Debit table</th>
                        </tr>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Date</th>
                            <th>Pooja</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(debitData) &&
                            debitData.map((item: any, i: number) => {
                                return (
                                    <tr key={i}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <table>
                    <thead>
                    <tr style={{fontSize: "2rem", fontWeight:"600", textAlign: "center",}}>
                        <th colSpan={4} style={{padding: "10px",}}>Credit table</th>
                    </tr>
                        <tr>
                            <th>Sl. No.</th>
                            <th>Date</th>
                            <th>Pooja</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(creditData) &&
                            creditData.map((item: any, i: number) => {
                                return (
                                    <tr key={i}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccountDetails;