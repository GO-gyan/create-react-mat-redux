import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo && errorInfo.componentStack}
                    </details>
                </>
            );
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.instanceOf(Object),
};

ErrorBoundary.defaultProps = {
    children: null,
};

export default ErrorBoundary;
