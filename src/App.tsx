import React, { useState } from "react";

import "./css/defaults.css";
// import "./css/normalize.css";
import "./css/main.scss";

import TopBar from "./components/TopBar";
import ProjectList from "./components/ProjectList";
import ProjectArea from "./components/ProjectArea";

// track time in seconds
// dates in epoch time

// Loaded JSON from local storage
const projects = [
    {
        projectName: "Project 1",
        id: 1,
        lastModified: new Date(),
        totalTime: 180,
        timeLog: [
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 256,
            },
        ],
    },
    {
        projectName: "Project 2",
        id: 2,
        lastModified: new Date(),
        totalTime: 180,
        timeLog: [
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 256,
            },
        ],
    },
    {
        projectName: "Project 3",
        id: 3,
        lastModified: new Date(),
        totalTime: 60,
        timeLog: [
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 256,
            },
        ],
    },
    {
        projectName: "Really Long Project Title",
        id: 4,
        lastModified: new Date(),
        totalTime: 45,
        timeLog: [
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 256,
            },
        ],
    },
];

const App: React.FC = () => {
    const [activeProject, setActiveProject] = useState(1);
    const currentProject = projects.filter((p) => p.id === activeProject);
    console.log(currentProject);
    return (
        <div className="App">
            <main className="mainWrapper grid">
                <TopBar />
                <ProjectList
                    onClick={(e) => {
                        let target = e.target as Element;
                        // console.log(e.currentTarget);
                        let projectId: string | null | undefined;
                        // if (!target.getAttribute("id")) {
                        //     projectId = target.parentElement?.getAttribute(
                        //         "id",
                        //     );
                        // } else {
                        // }
                        projectId = e.currentTarget.getAttribute("id");
                        setActiveProject(Number(projectId));
                    }}
                    projects={projects}
                />
                <ProjectArea
                    // projects={projects}
                    activeProject={activeProject}
                />
            </main>
        </div>
    );
};

export default App;
