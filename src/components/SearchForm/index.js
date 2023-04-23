// import packages
import React from 'react';

// import components
import Button from '../Button';

// import styling
import styles from './searchform.module.scss';

export default function SearchForm({initialSearchQuery , onSearch}) {

    const [searchQuery , setSearchQuery] = React.useState(initialSearchQuery || '');

    function handleKeyDownEnter(e) {
        if (e.key === "Enter") {
            onSearch(searchQuery);
          }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__searchinput}>
                <input
                    type='text'
                    placeholder='What do you want to watch?'
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown={e => handleKeyDownEnter(e)}
                    onFocus={() => onSearch(searchQuery)}
                />
            </div>
            <Button btnClass='primary' data-testid='searchForm' text='Search' onClick={() => onSearch(searchQuery)}/>
        </div>
    )
}