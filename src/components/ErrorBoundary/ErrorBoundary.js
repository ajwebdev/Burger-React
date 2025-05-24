import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        // It's also good practice to store errorInfo for more detailed logs
        this.setState({ errorInfo: errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>We're sorry, but an unexpected error occurred. Please try again later.</p>
                    {/* You could optionally display error details in development */}
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                    )}
                </div>
            );
        }

        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;
