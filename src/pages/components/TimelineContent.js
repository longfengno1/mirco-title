'use strict';
import React, { Component } from 'react';
import Styles from './Timeline.scss';
import PropTypes from 'prop-types';

export default class TimelineContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Styles.timelineContentContainer}>
                <h2>哈哈哈</h2>
                <div className={Styles.contentLabel}></div>
            </div>
        );
    }
}
