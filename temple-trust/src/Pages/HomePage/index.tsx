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
    const [availableDates, setAvailableDates] = useState<any>([]);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [showSelect, setShowSelect] = useState<boolean>(false);

    const getWorshipData = async () => {
        await getWorshipList(setData);
    }

    useEffect(() => {
        if(data){
            let dates: any[] = [];

            data.forEach((slot: any) => {
                if(!dates.includes(slot[1])){
                    dates.push(slot[1]);
                }
            })

            console.log(dates);
            setAvailableDates(dates);

            setSelectedDate(dates[0] || "");
        }
    },[data]);

    useEffect(() => {
        getWorshipData();
    }, []);

    console.log("data",selectedDate)

    return (
        <div className="mainDiv">
            <div>
                <div>
                    {
                        Array.isArray(data)?
                        (
                            <AutoScroller>
                                {
                                    data.filter((d: any) => {
                                        return (d[1] === selectedDate) ? true : false
                                    }).map((slot: any, i: number) => {
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
                <div style={{display: "flex", justifyContent: "end",}}>
                    {
                        showSelect &&
                        <select onChange={(e: any) => {
                            setShowSelect(false);
                            setSelectedDate(e.target.value)
                        }}>
                            {
                                availableDates?.map((date: any) => {
                                    return (
                                        <option value={date} selected={selectedDate === date}>{date}</option>
                                    )
                                })
                            }
                        </select>
                    }
                    {
                        !showSelect &&
                        <button onClick={()=>setShowSelect(true)} style={{backgroundColor: "white", padding: "0.5rem", borderRadius: "15px 0px 0px 15px"}}>{"<"}</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;