import React from "react";
import styled from "styled-components";

export default function Project() {
    return (
        <Container>
            <h2>My Thyme</h2>
            <div className="totalTime">
                <span className="number">3</span>{" "}
                <span className="timeUnit">hours</span>
            </div>
            <div className="lastModified smallText">4/7/2021</div>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    /* height: 5rem; */
    position: relative;
    grid-template-columns: 2fr 1fr;
    padding: 1rem 0;
    /* grid-gap: 1rem; */
    /* border: 1px solid red; */
    margin-top: 2rem;
    align-items: center;
    cursor: pointer;
    h2 {
        /* font-weight: medium; */
        grid-area: 1 / 1 / 2 / 3;
        margin: 0rem 0;
    }
    .lastModified {
        font-style: italic;
        font-family: "Courier Prime";
        grid-area: 2 / 1 / 3 / 2;
        align-self: center;
        align-self: center;
        font-size: 1.5rem;
        padding-top: 3px;
    }
    .totalTime {
        text-align: right;
        /* font-size: ; */
        min-width: 11rem;
        grid-area: 2 / 2 / 3 / 3;
    }
    .totalTime .timeUnit {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        /* text-transform: uppercase; */
    }
    :before {
        content: "";
        border-bottom: 1px var(--gray) solid;
        position: absolute;
        bottom: 0;
        width: 100%;
        justify-self: center;
    }
    :after {
        content: "";
        border-bottom: 1px var(--primary) solid;
        position: absolute;
        bottom: 0px;
        width: 0%;
        width: 100%;
        transform: scaleX(0);
        transition: width 0.2s, transform 0.2s;
        justify-self: center;
        will-change: transform;
    }
    :hover:after {
        transform: scaleX(1);
        /* width: 100%; */
        border-bottom: 1px var(--primary) solid;
    }
`;
