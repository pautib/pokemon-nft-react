
export const getFilteredPokemonInfo = (json) => {

    let filteredData = {}
    filteredData = flatAndFilterNullSprites(json)
    filteredData.sprites = simplifyImageKeys(filteredData.sprites);
    
    return filteredData;
}

function simplifyImageKeys(spritesJson) {
    let simplifiedSprites = {};

    for (const key in spritesJson) {
        let newKey = key.replace("other", "")
        .replace("versions", "")
        .replace("generation", "gen")
        .replaceAll("_", " ")
        .replaceAll("-", " ")
        .trim();

        simplifiedSprites[newKey] = spritesJson[key];
    }

    return simplifiedSprites;

}


function flatAndFilterNullSprites(responseJson) {

    let sprites = flattenObject(responseJson.sprites);
    //console.log(sprites);
    responseJson.sprites = sprites;
    //console.log(responseJson);
    return responseJson;
}


const flattenObject = (input, keyName) => { // implicitly removes null values
    var result = {};
    for (const key in input) {
        const newKey = keyName ? `${keyName}_${key}` : key;
        if (typeof input[key] === "object" && !Array.isArray(input[key])) {
            result = { ...result, ...flattenObject(input[key], newKey) }
        } else {
            result[newKey] = input[key];
        }
    }

    let sorted_obj = Object.keys(result).sort(sortSprites).reduce((temp_obj, key) => {
        temp_obj[key] = result[key];
        return temp_obj;
    }, {});

    return sorted_obj;
};

const sortingArray = ['front_default', 'back_default', 'front_female', 'back_female',
    'front_shiny', 'back_shiny', 'front_shiny_female', 'back_shiny_female',
    'front_gray', 'back_gray', 'front_transparent', 'back_transparent',
    'front_shiny_transparent', 'back_shiny_transparent'];


const sortSprites = (a, b) => {
    const foundA = sortingArray.findIndex(element => a.includes(element));
    const foundB = sortingArray.findIndex(element => b.includes(element));

    if (foundA === -1) return -1;
    if (foundB === -1) return -1;
    if (foundA === foundB) return a.localeCompare(b);

    return sortingArray.indexOf(a) - sortingArray.indexOf(b);

}