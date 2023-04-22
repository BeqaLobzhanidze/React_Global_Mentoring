import styles from './sortcontrol.module.scss';
import React from 'react';
import constants from '../../utils/constants';
import { getSortControlValue } from '../MovieTile/utills/separator';

export default function SortControl({currentSelectProps , onSortBy}) {
    const [currentSelect , setCurrentSelect] = React.useState(currentSelectProps || 'RELEASE DATE');

    function selectSortBy(e) {
        setCurrentSelect(e.target.value);
        onSortBy(getSortControlValue(e.target.value));
    }
    return (
        <div className={styles.container}>
            <p>Sort By</p>
            <select data-testid='select' value={currentSelect} onChange={(e) => selectSortBy(e)}>
                {constants.sortCriterion.map(item => <option key={item.id}>{item.name}</option> )}
            </select>
        </div>
    )
}