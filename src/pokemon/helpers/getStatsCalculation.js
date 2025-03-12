export const LVL_MIN_VALUE = 1;
export const LVL_MAX_VALUE = 100;
export const IV_MIN_VALUE = 0;
export const IV_MAX_VALUE = 31;
export const EV_MIN_VALUE = 0;
export const EV_MAX_VALUE = 252;
const NATURE_INCREASE_MULTIPLIER = 1.1;
const IV_MAX_VALUE_ARRAY = [IV_MAX_VALUE, IV_MAX_VALUE, IV_MAX_VALUE, IV_MAX_VALUE, IV_MAX_VALUE, IV_MAX_VALUE];
const EV_MAX_VALUE_ARRAY = [EV_MAX_VALUE, EV_MAX_VALUE, EV_MAX_VALUE, EV_MAX_VALUE, EV_MAX_VALUE, EV_MAX_VALUE];
const NATURE_INCREASE_MULTIPLIER_ARRAY = [1, NATURE_INCREASE_MULTIPLIER, NATURE_INCREASE_MULTIPLIER, NATURE_INCREASE_MULTIPLIER, NATURE_INCREASE_MULTIPLIER, NATURE_INCREASE_MULTIPLIER];


export const getStatsCalculation = (baseStatsArray, ivArray, evArray, level,  natureArray , pokemonName) => { // Make the corresponding HP exception for shedinja

    let newStats = [];

    newStats[0] = pokemonName === "shedinja" ? 1 : getHPValue(baseStatsArray[0], ivArray[0], evArray[0], level); // HP
    newStats[1] = getOtherStatValue(baseStatsArray[1], ivArray[1], evArray[1], level, natureArray[1]); // Atk
    newStats[2] = getOtherStatValue(baseStatsArray[2], ivArray[2], evArray[2], level, natureArray[2]); // Def
    newStats[3] = getOtherStatValue(baseStatsArray[3], ivArray[3], evArray[3], level, natureArray[3]); // Atk Sp
    newStats[4] = getOtherStatValue(baseStatsArray[4], ivArray[4], evArray[4], level, natureArray[4]); // Def Sp
    newStats[5] = getOtherStatValue(baseStatsArray[5], ivArray[5], evArray[5], level, natureArray[5]); // Speed

    return newStats;
}

export const getMaxStatValue = (baseStatsArray) => {
    let maxArrayValues = getStatsCalculation(baseStatsArray, IV_MAX_VALUE_ARRAY, EV_MAX_VALUE_ARRAY, LVL_MAX_VALUE, NATURE_INCREASE_MULTIPLIER_ARRAY, "");
    return Math.max(...maxArrayValues);
}

const getHPValue = (baseStatHp, ivHp, evHp, level) => {
    let hpValue = (2 * baseStatHp + ivHp + (evHp / 4.0)) * level / 100.0 + level + 10;
    return Math.trunc(hpValue);
}

const getOtherStatValue = (baseStat, IV, EV, level, natureMultiplier) => {
    let value = ( (2 * baseStat + IV + (EV / 4.0)) * level / 100.0 + 5.0) * natureMultiplier;
    return Math.trunc(value);
}