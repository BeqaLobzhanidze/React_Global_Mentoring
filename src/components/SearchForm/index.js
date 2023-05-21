// import packages
import React from 'react';
import { useRouter } from 'next/router';

// import components
import Button from '../Button';

// import styling
import styles from './searchform.module.scss';

export default function SearchForm({initialSearchQuery}) {

    const { push , query } = useRouter();
    const [searchQuery , setSearchQuery] = React.useState( query.query || initialSearchQuery || '');

    function setUrl() {
        push({ query: { ...(query || {}), query: searchQuery } });
    }

    function handleKeyDownEnter(e) {
        if (e.key === "Enter") {
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
                        setUrl();
                    }}
                />
            </div>
            <Button btnClass='primary' text='Search' onClick={() => {
                setUrl();
            }}/>
        </div>
    )
}