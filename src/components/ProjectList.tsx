import React from "react";
import styled from "styled-components";
import Project from "./Project";

export const ProjectList = () => {
    return (
        <ProjectWrapper>
            <h1>Projects</h1>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
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
