import React from "react";
import styled from "styled-components";

import TimerArea from "./TimerArea";
import TrackedTimeList from "./TrackedTimeList";

interface ProjectAreaProps {
    activeProject: number;
}

const ProjectArea: React.FC<ProjectAreaProps> = ({ activeProject }) => {
    return (
        <ProjectAreas className="projectArea">
            <h1>{activeProject}</h1>
            <TimerArea />
            <TrackedTimeList />
        </ProjectAreas>
    );
};

export default ProjectArea;

const ProjectAreas = styled.div`
    // display: flex;
    // grid-area: 3 / -1;
    // grid-row-start: 2;
    // grid-column-start: 2;
    // grid-column-end: 3;
    display: grid;
    grid-template-rows: 2fr 1fr;
    background-color: var(--lightBrown);
    overflow: hidden;

    /* align-items: center; */
    /* justify-content: center; */
`;
