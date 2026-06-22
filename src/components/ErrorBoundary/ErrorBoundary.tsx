import { Component, type ErrorInfo, type ReactNode } from "react";

export class ErrorBoundary extends Component<{
    children: ReactNode;
    errorMessage: string;
}> {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        return (
            <>
                <div>
                    {this.state.hasError ? (
                        <p>{`Error in this component, Message is: ${this.props.errorMessage}`}</p>
                    ) : (
                        this.props.children
                    )}
                </div>
            </>
        );
    }
}
