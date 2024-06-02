import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slotCreater, todaysDate } from "../../Shared/utility";
import { getWorshipList, getWorshipListSuccess } from "../../Store/actions/worship";
import Loader from "../../Components/Loader";
import SlotCard from "../../Components/SlotCard";
import AutoScroller from "../../Components/AutoScroller";

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
        <div>
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
                                            image={slot[1] || ''}
                                            pooja={slot[2] || ''}
                                            time={slot[3] || ''}
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