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

export {SeparatorBetweenGenres , Duration}