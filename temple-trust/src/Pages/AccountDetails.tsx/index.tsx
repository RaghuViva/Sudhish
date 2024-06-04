import React, { useEffect, useState } from "react";
import { getAccountList } from "../../Store/actions/worship";
import SlotCard from "../../Components/SlotCard";

const AccountDetails = () => {
    const [data, setData] = useState<any>(null);

    const getAccountDetails = async () => {
        await getAccountList(setData);
    };

    useEffect(() => {
        getAccountDetails();
    },[]);

    console.log("AccountDetails : ", data);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            padding: "1rem",
        }}>
            {
                Array.isArray(data) &&
                data.map((item: any, i: number) => {
                    return (
                        <SlotCard
                            key={i}
                            name={item[0] || ''}
                            date={item[1] || ''}
                            image={item[2] || ''}
                            pooja={item[3] || ''}
                            time={item[4] || ''}
                            amount={item[5] || ''}
                            isAccountDetails={true}
                        />
                    )
                })
            }
        </div>
    );
};

export default AccountDetails;