import React from "react";
import styled from "styled-components";

export const ProjectList = () => {
    return (
        <ProjectWrapper>
            <h1>Projects</h1>
            <Project>
                <h2>My Thyme</h2>
                <div className="totalTime">
                    <span className="number">3</span>{" "}
                    <span className="timeUnit">hours</span>
                </div>
                <div className="lastModified smallText">4/7/2021</div>
            </Project>
            <Project>
                <h2>My Site</h2>
                <div className="totalTime">
                    <span className="number">8</span>{" "}
                    <span className="timeUnit">hours</span>
                </div>
                <div className="lastModified smallText">3/11/2021</div>
            </Project>
            <Project>
                <h2>Clever Kata</h2>
                <div className="totalTime">
                    <span className="number">10.5</span>{" "}
                    <span className="timeUnit">hours</span>
                </div>
                <div className="lastModified smallText">2/2/2021</div>
            </Project>
            <Project>
                <h2>Client Work</h2>
                <div className="totalTime">
                    <span className="number">11.20</span>{" "}
                    <span className="timeUnit">hours</span>
                </div>
                <div className="lastModified smallText">2/2/2021</div>
            </Project>
            <Project>
                <h2>Very Long Project Name</h2>
                <div className="totalTime">
                    <span className="number">121.45</span>{" "}
                    <span className="timeUnit">hours</span>
                </div>
                <div className="lastModified smallText">1/3/2021</div>
            </Project>
        </ProjectWrapper>
    );
};

export default ProjectList;

const ProjectWrapper = styled.div`
    /* border-right: 2px solid var(--black); */
    color: white;
    box-shadow: 2px 0px 5px var(--shadow);
    background-color: var(--brown);
    z-index: 20;
    font-size: 2rem;
    padding: 2rem;
    min-width: 250px;
    h1 {
        text-align: center;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 0.4rem;
    }
    /* display: flex; */
    /* flex-direction: column; */
    /* width: 20%; */
    /* height: 100%; */
    /* grid-area: 2 / -1; */
    /* grid-row-start: 2; */
    /* grid-row-end: -1; */
    /* grid-column-start: 1; */
    /* grid-column-end: 2; */
    /* grid-row: 1 / -1;  */
`;

const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    /* height: 5rem; */
    border-bottom: 1px var(--primary) solid;
    grid-template-columns: 2fr 1fr;
    padding: 1rem 0;
    /* grid-gap: 1rem; */
    margin-top: 2rem;
    align-items: center;
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
`;
