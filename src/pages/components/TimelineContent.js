import React, { Component } from 'react';
import Styles from './Timeline.scss';
import PropTypes from 'prop-types';

export default class TimelineContent extends Component {
    static propsType = {
        labels: PropTypes.array
    };
    labels = [];
    render() {
        return (
            <div className={Styles.timelineContentContainer}>
                <h2>哈哈哈</h2>
                <div className={Styles.contentLabel}></div>
            </div>
        )
    }
}
