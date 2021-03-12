import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./css/main.scss";

import TopBar from "./components/TopBar";
import ProjectList from "./components/ProjectList";
import ProjectArea from "./components/ProjectArea";

function App() {
    return (
        <div className="App">
            <TopBar />
            <ProjectList />
            <ProjectArea />
        </div>
    );
}

export default App;
