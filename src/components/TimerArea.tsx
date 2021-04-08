import React from "react";
import styled from "styled-components";

export const TimerArea = () => {
    return (
        <Ticker>
            <div>123:45</div>
        </Ticker>
    );
};
export default TimerArea;

const Ticker = styled.div`
    font-size: 15rem;
    color: var(--darkBrown);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Courier Prime", monospace;
    letter-spacing: -2rem;
    font-weight: light;
    text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid var(--primary);
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 10px var(--shadow);
    z-index: 10;
`;
