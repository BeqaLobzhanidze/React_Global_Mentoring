import styles from './counter.module.scss'
import React from 'react'

export default function Counter(props) {

    const [value , setValue] = React.useState(0);

    return (
        React.createElement('div', { className: styles.container },
            React.createElement('div', { className: styles.container__increment },
                React.createElement('button', { onClick: () => setValue(prev => prev += 1) }, 'Increment')
            ),
            React.createElement('h3', { className: styles.container__value }, value),
            React.createElement('div', { className: styles.container__decrement },
                React.createElement('button', { onClick: () => setValue(prev => prev -= 1), disabled: !value }, 'Decrement')
            )
        )
    )
}