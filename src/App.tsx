import React, { useState } from "react";

import "./css/defaults.css";
// import "./css/normalize.css";
import "./css/main.scss";

import TopBar from "./components/TopBar";
import ProjectList from "./components/ProjectList";
import ProjectArea from "./components/ProjectArea";

function App() {
    return (
        <div className="App">
            <main className="mainWrapper grid">
                <TopBar />
                <ProjectList />
                <ProjectArea />
            </main>
        </div>
    );
}

export default App;
