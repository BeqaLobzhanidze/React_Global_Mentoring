// import packages
import React from 'react';
import { useSearchParams } from 'react-router-dom';

// import components
import Button from '../Button';

// import styling
import styles from './searchform.module.scss';

export default function SearchForm({initialSearchQuery , onSearch}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery , setSearchQuery] = React.useState( searchParams.get('query') || initialSearchQuery || '');

    function setUrl() {
        const existingParams = Object.fromEntries(searchParams.entries());
        const newParams = { query: searchQuery };
        const mergedParams = { ...existingParams, ...newParams };
        setSearchParams(new URLSearchParams(mergedParams));
    }

    function handleKeyDownEnter(e) {
        if (e.key === "Enter") {
            onSearch(searchQuery);
            setUrl();
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
                    onFocus={() => { 
                        onSearch(searchQuery);
                        setUrl();
                    }}
                />
            </div>
            <Button btnClass='primary' text='Search' onClick={() => {
                onSearch(searchQuery);
                setUrl();
            }}/>
        </div>
    )
}