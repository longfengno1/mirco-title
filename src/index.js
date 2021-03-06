'use strict';
import React from 'react';
import {
    render
} from 'react-dom';
import App from './pages/App';
import './index.scss';

const renderDom = Component => {
    render(<Component />, document.getElementById('app'));
}
renderDom(App);
