import React from "react";
import './index.css';
import { displayTimeForUI } from "../../Shared/utility";
import defaultProfilePic from '../../Assets/images/default-pfp.svg';

interface SlotCardPropsType {
    name: string;
    date: string;
    image: string;
    pooja: string;
    time: string;
}

const SlotCard: React.FC<SlotCardPropsType> = (props) => {
    const {name, date, image, pooja, time,} = props;
    return (
        <div className="slot">
            <div className="imageContainer">
                <img src={image || defaultProfilePic} alt="profile pic"className="image" />
            </div>
            <div>
                <div>
                    <p style={{fontSize:"22px", fontWeight: "600", textTransform: "capitalize", }}>{name}</p>
                    <p style={{fontSize:"28px", fontWeight: "800", color:"#fb6464" }}>{pooja}</p>
                </div>
                <div>
                    <p style={{display: "flex", justifyContent:"space-between", fontSize: "16px", fontWeight:"500"}}>
                        <span>{date}</span>
                        <span>{time}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SlotCard;