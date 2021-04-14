/**
 * Helper functions
 *
 */

/**
 *
 * @param seconds
 * @returns a string of seconds with a "0" if needed
 */
const formatSeconds = (seconds: number): string => {
    let secondsLeft = Math.floor(seconds % 60);
    let pad = "";
    if (secondsLeft < 10) {
        pad = "0";
    }
    return `${pad}${secondsLeft}`;
};

/**
 *
 * @param seconds
 * @returns a string of minutes with a "0" pad if needed
 */
const formatMinutes = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60);
    let minutesMod = minutes % 60;
    let pad = "";
    if (minutesMod < 10) {
        pad = "0";
    }
    return `${pad}${minutesMod}`;
};

/**
 *
 * @param seconds
 * @returns string of hours with a "0" pad if needed
 */
const formatHours = (seconds: number): string => {
    let hours = Math.floor(seconds / 60 / 60);
    let pad = "";
    if (hours < 10) {
        pad = "0";
    }
    return `${pad}${hours}`;
};

export { formatSeconds, formatMinutes, formatHours };
