import React from "react";
import styled from "styled-components";

import {
    formatSeconds,
    formatMinutes,
    formatHours,
    formatDate,
} from "../helpers/helpers";

import minus from "../images/minus.svg";
import plus from "../images/plus.svg";
import edit from "../images/edit.svg";

interface TimeLog {
    date: Date;
    note: string;
    timeLogged: number;
    id: number;
    handleDelete: (arg0: number) => void;
}

const TrackedTime: React.FC<TimeLog> = ({
    date,
    note,
    timeLogged,
    id,
    handleDelete,
}) => {
    // TODO: format the dates nicely

    const formattedMinutes = formatMinutes(timeLogged);
    const formattedSeconds = formatSeconds(timeLogged);
    const formattedDate = formatDate(date);
    return (
        <Time>
            <div className="number mediumText">{formattedDate}</div>
            <div>{note}</div>
            <div onClick={() => handleDelete(id)}>{id}</div>
            <div className="number mediumText">{`${formattedMinutes}:${formattedSeconds}`}</div>
            <div className="button">
                <img src={plus} alt="" />
            </div>
            <div className="button">
                <img src={minus} alt="" />
            </div>{" "}
            <div className="button">
                <img src={edit} alt="" />
            </div>
            {/* <img className="plus" src={plus} alt="" /> */}
        </Time>
    );
};

export default TrackedTime;

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
    div:nth-child(1) {
        letter-spacing: 0.05rem;
        font-style: italic;
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
        /* cursor: pointer; */
        &.button {
            padding: 5px;
            cursor: pointer;
        }
        display: inline;
        img {
            width: 1.5rem;
            /* padding: 5px; */
            /* margin: 5px; */
        }
    }
`;
