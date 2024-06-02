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
                    <p>{name}</p>
                    <p>{pooja}</p>
                </div>
                <div>
                    <p>{date} {time}</p>
                </div>
            </div>
        </div>
    );
};

export default SlotCard;