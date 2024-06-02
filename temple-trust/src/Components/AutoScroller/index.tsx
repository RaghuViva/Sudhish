import React from "react";
import './index.css';

interface AutoScrollerPropsType {
    children: React.ReactNode;
}

const AutoScroller: React.FC<AutoScrollerPropsType> = (props) => {
    const {children,} = props;

    return (
        <div className="inner">
            <div className="wrapper">
                <div className="scroller">
                    {children}
                </div>
                <div className="scroller">
                    {children}
                </div>
                <div className="scroller">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AutoScroller;