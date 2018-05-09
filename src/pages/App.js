'use strict';
import React, {
    Component
} from 'react';
import styles from './App.scss';
import TimelineBlock from './components/TimelineBlock';
import PropTypes from 'prop-types';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.records = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    renderItems(records) {
        return records.map((item, index) => <TimelineBlock key={index}></TimelineBlock>);
    }

    render() {
        return (
            <section className={styles.timelineContainer}>
                {this.renderItems(this.records)}
            </section>
        );
    }
}
