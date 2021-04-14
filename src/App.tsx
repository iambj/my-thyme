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
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 300,
            },
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 100,
            },
            {
                date: new Date(),
                note: "This is a fake time log",
                timeLogged: 60,
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
    {
        projectName: "Empty Project",
        id: 5,
        lastModified: new Date(),
        totalTime: 0,
        timeLog: [],
    },
];

const App: React.FC = () => {
    const [activeProject, setActiveProject] = useState(0);
    const currentProject = projects.filter((p) => p.id === activeProject)[0];
    console.log("Current", currentProject, activeProject);
    return (
        <div className="App">
            {/* <div>{activeProject}</div> */}
            <main className="mainWrapper grid">
                <TopBar />
                <ProjectList
                    onClick={(e) => {
                        // let target = e.target as Element;
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
                    activeProject={activeProject}
                    currentProject={currentProject}
                />
            </main>
        </div>
    );
};

export default App;
