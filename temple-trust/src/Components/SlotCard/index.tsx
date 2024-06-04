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
    amount?: string;
    isAccountDetails?: boolean;
}

const SlotCard: React.FC<SlotCardPropsType> = (props) => {
    const {name, date, image, pooja, time, amount=0, isAccountDetails = false,} = props;
    return (
        <div className={isAccountDetails ? "slot_AD" : "slot"}>
            <div className="imageContainer">
                <img src={image || defaultProfilePic} alt="profile pic"className={isAccountDetails ? "image_AD" : "image"}/>
            </div>
            <div style={{
                display:"flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <p style={{fontSize:"22px", fontWeight: "600", textTransform: "capitalize", }}>{name}</p>
                <p style={{fontSize:"28px", fontWeight: "800", color:"#fb6464" }}>{pooja}</p>
                <p style={{display: "flex", justifyContent:"space-between", fontSize: "16px", fontWeight:"500"}}>
                    <span>{date}</span>
                    <span>{time}</span>
                </p>
                {
                    isAccountDetails &&
                    <p style={{fontSize: "18px", fontWeight:"500"}}>Donation : {amount}rs</p>
                }
            </div>
        </div>
    );
};

export default SlotCard;