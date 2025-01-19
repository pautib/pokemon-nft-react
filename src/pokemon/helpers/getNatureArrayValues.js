
const pokeApiRoot = 'https://pokeapi.co/api/v2/nature/';

export const getNaturesArrayValues = async() => {

    let naturesArrayObject = {};
    let naturesArray = [];
    // First we count how many natures there are
    const numberOfNatures = await getNumberOfNatures(); // each nature has an index starting with 1

    for ( let i = 1; i <= numberOfNatures; i++ ) {
        await getSpecificNatureData(i)
            .then((response) => response.json())
            .then((jsonBody) => ( {
                name: jsonBody.name,
                increased_stat: jsonBody.increased_stat?.name,
                decreased_stat: jsonBody.decreased_stat?.name
            }))
            .then((stats) => {
                naturesArrayObject[stats.name] = getThisNatureObject(stats.increased_stat, stats.decreased_stat)
                naturesArray.push([stats.name, getThisNatureObject(stats.increased_stat, stats.decreased_stat)]);
            });
    }

    return naturesArray;
}

const getNumberOfNatures = async() => {

    let natureQuantity = 0;
    try {
        const response = await fetch(pokeApiRoot);
        natureQuantity = response.json().then((res) => res.count);
        return natureQuantity;
    } catch (e) {
        console.error(e);
        throw new Error(`Error while retrieving number of natures`);
    }

}

const getSpecificNatureData = async(id) => {

    try {
        const response = await fetch(pokeApiRoot + id);
        return response.clone();
    } catch (e) {
        console.error(e);
        throw new Error(`Error while retrieving specific nature`);
    }

}

const getThisNatureObject = (increasedStat, decreasedStat) => {

    let description = "";
    let matrix = [1,1,1,1,1,1];

    switch (increasedStat) {
        case "attack":
            description = "+10% Atk, ";
            matrix[1] = 1.1;
            break;
        case "defense":
            description = "+10% Def, ";
            matrix[2] = 1.1;
            break;
        case "special-attack":
            description = "+10% AtkSp, ";
            matrix[3] = 1.1;
            break;
        case "special-defense":
            description = "+10% DefSp, ";
            matrix[4] = 1.1;
            break;
        case "speed":
            description = "+10% Speed, ";
            matrix[5] = 1.1;
            break;
    }

    switch (decreasedStat) {
        case "attack":
            matrix[1] = 0.9;
            description += "-10% Atk";
            break;
        case "defense":
            description += "-10% Def";
            matrix[2] = 0.9;
            break;
        case "special-attack":
            description += "-10% AtkSp";
            matrix[3] = 0.9;
            break;
        case "special-defense":
            description += "-10% DefSp";
            matrix[4] = 0.9;
            break;
        case "speed":
            description += "-10% Speed";
            matrix[5] = 0.9;
            break;
    }

    return {
        description: description,
        matrix: matrix,
    };

}