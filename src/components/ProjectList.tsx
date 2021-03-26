import React from "react";
import styled from "styled-components";

export const ProjectList = () => {
    return (
        <ProjectWrapper>
            <h1>Project List</h1>
            <div className="project">Project</div>
            <div className="project">Project</div>
            <div className="project">Project</div>
            <div className="project">Project</div>
        </ProjectWrapper>
    );
};

export default ProjectList;

const ProjectWrapper = styled.div`
    /* border-right: 2px solid var(--black); */
    color: white;
    box-shadow: 2px 0px 5px var(--shadow);
    background-color: var(--brown);
    z-index: 1;
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
