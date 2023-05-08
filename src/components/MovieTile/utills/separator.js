import constants from "../../../utils/constants";

function SeparatorBetweenGenres(list) {
    if(list.length <= 1) return '';

    if(list.length === 2) {
        return ' & ';
    } else {
        return ', ';
    }
}

function Duration(runtime) {
    let hour = 0;
    while(runtime  > 60) {
        runtime -= 60;
        hour += 1;
    }
    return `${hour}h ${runtime}min`
}

function getSortControlValue(name){
    let resultValue = "";
    for (const sortCriterion of constants.sortCriterion) {
        if(sortCriterion.name === name) resultValue = sortCriterion.value;
    }
    return resultValue;
}

export {SeparatorBetweenGenres , Duration , getSortControlValue}