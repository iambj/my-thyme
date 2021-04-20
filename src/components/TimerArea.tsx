import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { formatSeconds, formatMinutes, formatHours } from "../helpers/helpers";

let activeTime: number = 0; // seconds for now

/**
 * Takes a time in milliseconds (epoch time) and converts it to
 * normal time format: HH:MM:SS
 */
const formatTime = (seconds: number | any): string => {
    const formattedTime = `${formatHours(seconds)}:${formatMinutes(
        seconds,
    )}:${formatSeconds(seconds)}`;
    return formattedTime;
    // return formattedTime;
};

interface Timer {}

/**
 *
 * @param callback
 * @param delay in milliseconds
 *
 *
 */
function useInterval(callback: any, delay: number | null) {
    const savedCallback = useRef<Function>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback!.current!();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

let startTime: number;
const TimerArea: React.FC<Timer> = () => {
    let [time, setTime] = useState("00:00:00");
    let [delay, setDelay] = useState(1000);
    let [isRunning, setIsRunning] = useState(false);


    useInterval(
        () => {
            activeTime++;
            setTime(formatTime(activeTime));
        },
        isRunning ? delay : null,
    );

    return (
        <Ticker>
            <div className="timer">{time}</div>
            <div className="controls">
                <div
                    onClick={() => {
                        if (!startTime) {
                            startTime = Date.now();
                            console.log("first");
                        }
                        console.log("Play");
                        setIsRunning(true);
                    }}
                >
                    Play
                </div>
                <div
                    onClick={() => {
                        console.log("pause");
                        setIsRunning(false);
                    }}
                >
                    Pause
                </div>
            </div>
        </Ticker>
    );
};
export default TimerArea;

const Ticker = styled.div`
    font-family: "Courier Prime", monospace;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 10px var(--shadow);
    border-bottom: 1px solid var(--primary);
    color: var(--darkBrown);
    width: 100%;
    height: 100%;

    .timer {
        font-weight: light;
        font-size: 15rem;
        text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
        letter-spacing: -2rem;
    }

    .controls {
        font-size: 5rem;
    }
`;
