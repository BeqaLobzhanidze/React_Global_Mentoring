import styles from './sortcontrol.module.scss';
import React from 'react';
import constants from '../../utils/constants';
import { useRouter } from 'next/router';

export default function SortControl({currentSelectProps}) {

    const { query , push } = useRouter();
    const [currentSelect , setCurrentSelect] = React.useState(query.sortBy?.toUpperCase() || currentSelectProps || 'RELEASE DATE');

    function selectSortBy(e) {
        setCurrentSelect(e.target.value);
        push({ query: { ...(query || {}), sortBy: e.target.value } });
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