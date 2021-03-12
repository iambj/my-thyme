import React from "react";

import TimerArea from "./TimerArea";
import TrackedTimeList from "./TrackedTimeList";

export const ProjectArea = () => {
    return (
        <div className="projectArea">
            <TimerArea />
            <TrackedTimeList />
        </div>
    );
};

export default ProjectArea;
