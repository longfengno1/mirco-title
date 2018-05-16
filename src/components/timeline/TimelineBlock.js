'use strict';
import React, { Component } from 'react';
import Styles from './Timeline.scss';
import TimelineIcon from './TimelineIcon';
import TimelineContent from './TimelineContent';

export default class TimelineBlock extends Component {
    render() {
        return (
            <div className={Styles.timelineBlock}>
                <span className={Styles.timelineTime}>yyyy-mm-dd hh:mm</span>
                <TimelineIcon></TimelineIcon>
                <TimelineContent></TimelineContent>
            </div>
        );
    }
}
