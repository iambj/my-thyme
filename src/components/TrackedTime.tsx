import React from "react";
import styled from "styled-components";

export default function TrackedTime() {
    return (
        <Time>
            <div className="number mediumText">4/8/2010</div>
            <div>Time spent working on the main CSS</div>
            <div className="number mediumText">5:30:30</div>
        </Time>
    );
}

const Time = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 10px;
    font-size: 1.5rem;
    align-items: center;
    div {
        /* flex: 1; */
        margin: 0 2rem;
    }

    div:nth-child(2) {
        flex: 1;
    }
`;
