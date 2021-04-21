import React, { useState } from "react";
import styled from "styled-components";

import TrackedTimeList from "./TrackedTimeList";

export interface ProjectType {
    projectName: string;
    id: number;
    lastModified: Date;
    totalTime: number;
    /**
     * List of time logged
     */
    timeLog: TimeLog[];
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface Globals {
    globalModalState: boolean;
    toggleModalState: (arg0: boolean) => void;
}

interface TimeLog {
    date: Date;
    note: string;
    timeLogged: number;
    id: number;
}

const Project: React.FC<ProjectType & Globals> = ({
    onClick,
    projectName,
    lastModified,
    totalTime,
    timeLog,
    id,
    globalModalState,
    toggleModalState,
}) => {
    // const { projectName, lastModified, totalTime, timeLog } = props;
    const DATE = `${
        lastModified.getMonth() + 1
    }/${lastModified.getDate()}/${lastModified.getFullYear()}`;
    // console.log(timeLog);

    let [modalState, setModalState] = useState(false);

    return (
        <Container id={id.toString()} onClick={onClick}>
            <div>
                <div
                    className="editButton"
                    onClick={() => {
                        if (globalModalState === false) {
                            toggleModalState(true);
                            setModalState(true);
                        }
                    }}
                >
                    Edit
                </div>
            </div>
            {/* <div>Delete</div> */}
            <h2>{projectName}</h2>
            <div className="totalTime">
                <span className="number">{totalTime / 60} </span>
                <span className="timeUnit">
                    {totalTime === 60 ? "hour" : "hours"}
                </span>
            </div>
            <div className="lastModified  smallText">{DATE}</div>

            {modalState && false && (
                <div>
                    <div className="projectModal">
                        <div
                            className="closeX"
                            onClick={() => {
                                toggleModalState(false);
                                // console.log(globalModalState);
                                setModalState(false);
                            }}
                        >
                            X
                        </div>
                        <div className="modalGrid">
                            <div className="projectName">
                                <h2 contentEditable="true">{projectName}</h2>
                            </div>
                            <div>
                                <form action="">
                                    <div>
                                        <label htmlFor="a">Form</label>
                                        <input type="text" name="" id="a" />
                                    </div>
                                    <div></div>
                                    <div></div>
                                </form>
                                {/* <TrackedTimeList
                                    activeProject={id}
                                    currentProject={{
                                        projectName,
                                        lastModified,
                                        totalTime,
                                        timeLog,
                                        id,
                                    }}
                                /> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="modalBack"></div> */}
                </div>
            )}
        </Container>
    );
};

export default Project;

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
        transition: width 0.2s, transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        justify-self: center;
        will-change: transform;
    }
    :hover:after {
        transform: scaleX(1);
        /* width: 100%; */
        border-bottom: 1px var(--primary) solid;
    }
    .editButton {
        display: inline-block;

        &:hover {
            color: var(--primary);
        }
    }
    .modalBack {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: calc(var(--z-modal) - 1);
        cursor: default;
    }
    .projectModal {
        position: absolute;

        width: 50%;
        height: 50%;
        top: 25%;
        left: calc(25% + 100px);
        cursor: default;
        border: 6px solid var(--primary);
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(8px) brightness(250%);
        box-shadow: 0px 3px 10px var(--shadow);
        max-width: 65%;
        min-width: 300px;
        z-index: var(--z-modal);

        .closeX {
            position: absolute;
            right: 0.6rem;
            top: 0.4rem;
            cursor: pointer;
            color: var(--brown);
            font-weight: bold;
            font-size: 3rem;
            line-height: 3rem;
            &:hover {
                color: var(--primary);
            }
        }

        .modalGrid {
            /* display: grid; */
            display: flex;
            flex-direction: column;
        }
        .projectName {
            display: flex;
            color: var(--darkBrown);
            font-weight: 800;
            width: 100%;
            height: 8rem;
            align-items: center;
            justify-content: center;
        }
    }
`;
