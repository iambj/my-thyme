import React from "react";
import styled from "styled-components";
import TrackedTime from "./TrackedTime";

import Project, { ProjectType } from "./Project";

interface ProjectList {
    currentProject: ProjectType;
    activeProject: number;
}

export const TrackedTimeList: React.FC<ProjectList> = ({
    activeProject,
    currentProject,
}) => {
    // let currentProject = projects.filter((p) => p.id === activeProject);
    // console.dir(currentProject);
    return (
        <Times>
            {currentProject?.timeLog?.map((project, index) => (
                <TrackedTime
                    key={index}
                    date={project.date}
                    note={project.note}
                    timeLogged={project.timeLogged}
                />
            ))}
            {/* TODO: prettify */}
            {!currentProject?.timeLog?.length && <div>Tack some time</div>}
        </Times>
    );
};
export default TrackedTimeList;

const Times = styled.div`
    overflow-y: auto;
    color: var(--primary);
    background-color: var(--brown);
    background: linear-gradient(to top, var(--darkBrown) 0%, var(--brown) 100%);
    color: white;
    > div {
        background-color: var(--brown);
        border-bottom: 1px solid var(--lightBrown);
    }
    > div:nth-child(2n) {
        background-color: var(--darkBrown);
        border-bottom: 1px solid var(--lightBrown);
    }
`;
