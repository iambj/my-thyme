import React from "react";
import styled from "styled-components";

export const ProjectList = () => {
    return (
        <ProjectWrapper>
            Project List
            <div className="project">Project</div>
            <div className="project">Project</div>
            <div className="project">Project</div>
            <div className="project">Project</div>
        </ProjectWrapper>
    );
};

export default ProjectList;

const ProjectWrapper = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;
