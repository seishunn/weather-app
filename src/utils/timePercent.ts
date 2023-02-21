import {timeCompare} from "./timeCompare";

export const timePercent = (startTimePoint: any, endTimePoint: any, currentTimePoint: any) => {
    const newCurrentTimePoint = new Date(currentTimePoint).toLocaleTimeString('en-IT', {hour: '2-digit', minute:'2-digit'});
    const firstCompare = timeCompare(startTimePoint, newCurrentTimePoint, "<=");
    const secondCompare = timeCompare(endTimePoint, newCurrentTimePoint, ">=");

    if (firstCompare.compare && secondCompare.compare) {
        const resolve = Math.round((firstCompare.secondTimeMinutes - firstCompare.firstTimeMinutes) / ((secondCompare.firstTimeMinutes - firstCompare.firstTimeMinutes) / 100));
        if (resolve > 100) {
            return 100;
        }
        return resolve;
    }
    return 0;
}