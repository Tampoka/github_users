import {Component} from 'react';
import {ErrorScreen} from './ErrorScreen/ErrorScreen';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        const {error} = this.state;
        const {children, Fallback} = this.props;

        if (error && !Fallback) return <ErrorScreen error={error}/>;

        if (error) return <Fallback error={error}/>;

        return children;
    }
}