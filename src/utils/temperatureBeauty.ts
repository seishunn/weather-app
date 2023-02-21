export const temperatureBeauty = (temperature: string | number) => {
    let localTemperature: number = Math.round(+temperature);
    let localTemperatureString: string;
    let isNegative: boolean = false;

    if (temperature < 0) {
        isNegative = true;
    }
    localTemperature = Math.abs(localTemperature);

    if (localTemperature < 10 && localTemperature > -10) {
        localTemperatureString = `0${localTemperature}`;
    } else {
        localTemperatureString = `${localTemperature}`;
    }

    if (!isNegative) {
        localTemperatureString = `+${localTemperatureString}`;
    } else {
        localTemperatureString = `-${localTemperatureString}`;
    }

    return localTemperatureString;
}