import styles from './sortcontrol.module.scss';
import React from 'react';
import constants from '../../utils/constants';
import { getSortControlValue } from '../MovieTile/utills/separator';
import { useSearchParams } from 'react-router-dom';

export default function SortControl({currentSelectProps , onSortBy}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [currentSelect , setCurrentSelect] = React.useState(searchParams.get('sortCriterion') || currentSelectProps || 'RELEASE DATE');

    function selectSortBy(e) {
        setCurrentSelect(e.target.value);
        onSortBy(getSortControlValue(e.target.value));
        const existingParams = Object.fromEntries(searchParams.entries());
        const newParams = { sortCriterion: getSortControlValue(e.target.value) };
        const mergedParams = { ...existingParams, ...newParams };
        setSearchParams(new URLSearchParams(mergedParams));
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