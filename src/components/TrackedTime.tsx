import React from "react";
import styled from "styled-components";

import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import edit from "../images/edit.svg";

// import { ReactComponent as Minus2 } from "../images/plus.svg";

export default function TrackedTime() {
    return (
        <Time>
            <div className="number mediumText">4/8/2010</div>
            <div>Time spent working on the main CSS</div>
            <div className="number mediumText">5:30:30</div>
            <div>
                <img className="button" src={plus} alt="" />
            </div>
            <div>
                <img className="button" src={minus} alt="" />
            </div>{" "}
            <div>
                <img className="button" src={edit} alt="" />
            </div>
            {/* <img className="plus" src={plus} alt="" /> */}
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
        min-width: 250px;
        margin-right: auto;
    }
    div {
        /* display: flex;
        align-self: stretch;
        align-items: center; */
        cursor: pointer;
        padding: 5px;
        display: inline;
        img {
            width: 1.5rem;
            /* margin: 5px; */
        }
    }
`;
