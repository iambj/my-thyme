import React, { useEffect, useState } from "react";
import ThymeLeaf from "../images/leaf.svg";

type Props = {
    tagLine: string;
};

const tagLines = [
    "The tastiest time tracking app.",
    "Never let your thyme go to waste.",
    "We all love some free thyme.",
];

function pickTagLine(): string {
    const pick = Math.floor(Math.random() * 3);
    const tagLine = tagLines[pick];
    return tagLine;
}

// setInterval(() => {
//     setTag(pickTagLine());
//     console.log("tick");
// }, 2000);

export const TopBar = () => {
    let [tagLine, setTag] = useState(pickTagLine());

    // TODO
    //? try to update the state high up so it doesn't keep causing a refresh?

    useEffect(() => {
        const update = setInterval(() => {
            setTag(pickTagLine());
            console.log("tick");
            clearInterval(update);
        }, 1000);
    });

    return (
        <header className="topBar">
            <div>
                <div className="logo">
                    <img
                        alt="Thyme leaf icon"
                        className="thymeLeaf"
                        src={ThymeLeaf}
                    />
                    <span>My Thyme</span>
                    <img
                        alt="Thyme leaf icon"
                        className="thymeLeaf reversed"
                        src={ThymeLeaf}
                    />
                </div>
                <div className="tagLine">{tagLine}</div>
            </div>
        </header>
    );
};

export default TopBar;
