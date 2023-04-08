import styles from './sortcontrol.module.scss';
import React from 'react';

export default function SortControl({currentSelectProps , onSortBy}) {
    const [currentSelect , setCurrentSelect] = React.useState(currentSelectProps || 'RELEASE DATE');

    function selectSortBy(e) {
        setCurrentSelect(e.target.value);
        onSortBy(e.target.value);
    }
    return (
        <div className={styles.container}>
            <p>Sort By</p>
            <select data-testid='select' value={currentSelect} onChange={(e) => selectSortBy(e)}>
                <option>RELEASE DATE</option>
                <option>TITLE</option>
            </select>
        </div>
    )
}