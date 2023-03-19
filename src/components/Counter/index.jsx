// import packages
import React from 'react'

// import styling
import styles from './counter.module.scss'

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.initialValue || 0,
          };
	}

    render() {
        return (
            React.createElement('div', { className: styles.container },
                React.createElement('div', { className: styles.container__increment },
                    React.createElement('button', { onClick: () => this.setState(state => state.counter += 1)}, 'Increment')
                ),
                React.createElement('h3', { className: styles.container__value }, this.state.counter),
                React.createElement('div', { className: styles.container__decrement },
                    React.createElement('button', { onClick: () => this.setState(state => state.counter -= 1), disabled: !this.state.counter }, 'Decrement')
                )
            )
        )
    }
}