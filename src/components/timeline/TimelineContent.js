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
            <article className={Styles.timelineContentContainer}>
                <h2>名称</h2>
                <p className={Styles.contentLabel}><span>标签</span><span>标签</span><span>标签</span></p>
                <p className={Styles.contentLabel}><span>标签</span></p>
                <p className={Styles.contentLabel}><span>标签</span></p>
                <p className={Styles.contentLabel}><span>标签</span></p>
            </article>
        );
    }
}
