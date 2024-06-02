import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slotCreater, todaysDate } from "../../Shared/utility";
import { getWorshipList, getWorshipListSuccess } from "../../Store/actions/worship";
import Loader from "../../Components/Loader";
import SlotCard from "../../Components/SlotCard";
import AutoScroller from "../../Components/AutoScroller";
import './index.css';

const HomePage = () => {
    const [data, setData] = useState<any>(null);

    const getWorshipData = async () => {
        await getWorshipList(setData);
    }

    useEffect(() => {
        getWorshipData();
    }, []);

    console.log("data",data)

    return (
        <div className="mainDiv">
            <div>
                {
                    Array.isArray(data)?
                    (
                        <AutoScroller>
                            {
                                data.map((slot: any, i: number) => {
                                    console.log(slot)
                                    return (
                                        <SlotCard
                                            key={i}
                                            name={slot[0] || ''}
                                            date={slot[1] || ''}
                                            image={slot[2] || ''}
                                            pooja={slot[3] || ''}
                                            time={slot[4] || ''}
                                        />
                                    )
                                })
                            }
                        </AutoScroller>
                    ) : (
                        <Loader/>
                    )
            }
            </div>
        </div>
    );
};

export default HomePage;