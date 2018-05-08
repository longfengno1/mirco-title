import React, { Component } from 'react';
import Styles from './Timeline.scss';
import TimelineIcon from './TimelineIcon';

export default class TimelineBlock extends Component {
    render() {
        return (
            <div className={Styles.timelineBlock}>
                <TimelineIcon></TimelineIcon>
            </div>
        );
    }
}
