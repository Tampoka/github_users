import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ErrorBoundary} from './common/ErrorBoundary';
import {ErrorScreen} from './common/ErrorScreen/ErrorScreen';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary fallback={ErrorScreen}>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);
