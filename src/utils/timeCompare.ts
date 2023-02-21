export const timeCompare = (firstTimePoint: string, secondTimePoint: string, compare: ">" | "<" | "=" | ">=" | "<=") => {
    const [firstTime, firstAmpm] = firstTimePoint.split(" ");
    const [secondTime, secondAmpm] = secondTimePoint.split(" ");
    let [firstTimeHours = 0, firstTimeMinutes] = firstTime.split(":");
    let [secondTimeHours = 0, secondTimeMinutes] = secondTime.split(":");
    let firstTimeGeneral = +firstTimeMinutes;
    let secondTimeGeneral = +secondTimeMinutes;


    if (firstAmpm.toLowerCase().search("am") !== -1 && +firstTimeHours === 12) {
        firstTimeHours = 0;
    }
    if (secondAmpm.toLowerCase().search("am") !== -1 && +secondTimeHours === 12) {
        secondTimeHours = 0;
    }

    if (firstAmpm.toLowerCase().search("pm") !== -1) {
        firstTimeGeneral += (+firstTimeHours + 12) * 60;
    } else {
        firstTimeGeneral += +firstTimeHours * 60;
    }
    if (secondAmpm.toLowerCase().search("pm") !== -1) {
        secondTimeGeneral += (+secondTimeHours + 12) * 60;
    } else {
        secondTimeGeneral += +secondTimeHours * 60;
    }


    switch (compare) {
        case "<":
            return {firstTimeMinutes: firstTimeGeneral, secondTimeMinutes: secondTimeGeneral, compare: firstTimeGeneral < secondTimeGeneral}
        case ">":
            return {firstTimeMinutes: firstTimeGeneral, secondTimeMinutes: secondTimeGeneral, compare: firstTimeGeneral > secondTimeGeneral}
        case "=":
            return {firstTimeMinutes: firstTimeGeneral, secondTimeMinutes: secondTimeGeneral, compare: firstTimeGeneral == secondTimeGeneral}
        case "<=":
            return {firstTimeMinutes: firstTimeGeneral, secondTimeMinutes: secondTimeGeneral, compare: firstTimeGeneral <= secondTimeGeneral}
        case ">=":
            return {firstTimeMinutes: firstTimeGeneral, secondTimeMinutes: secondTimeGeneral, compare: firstTimeGeneral >= secondTimeGeneral}
    }
}