import React, { Component } from 'react';
import Styles from './Timeline.scss';

export default class TimelineIcon extends Component {
    render() {
        return (
            <div className={Styles.timelineIconContainer}>
                <span className={Styles.timelineIcon}></span>
            </div>
        );
    }
}
