export default function SeparatorBetweenGenres(list) {
    if(list.length <= 1) return '';

    if(list.length === 2) {
        return ' & ';
    } else {
        return ', ';
    }
}