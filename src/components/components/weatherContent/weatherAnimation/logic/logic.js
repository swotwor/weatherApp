import * as Icon from '../src/src';

export function removeDash(weatherData) {
    const text = weatherData?.replace(/-/g, '');
    return Icon?.[text]
}