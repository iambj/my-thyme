import React from "react";
import styled from "styled-components";
import TrackedTime from "./TrackedTime";

export const TrackedTimeList = () => {
    return (
        <Times>
            <TrackedTime />
            <TrackedTime />
            <TrackedTime />
            <TrackedTime />
            <TrackedTime />
            <TrackedTime />
            <TrackedTime />
        </Times>
    );
};
export default TrackedTimeList;

const Times = styled.div`
    overflow-y: scroll;
    color: var(--primary);
    color: white;
    > div {
        background-color: var(--brown);
    }
    > div:nth-child(2n) {
        background-color: var(--darkBrown);
    }
`;
