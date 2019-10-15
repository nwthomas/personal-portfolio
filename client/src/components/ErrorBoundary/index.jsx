import React, { Component } from 'react';

import type {
  ErrorBoundaryState,
  ErrorBoundaryProps
} from './ErrorBoundaryTypes';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: Object) {
    const { Sentry } = window;
    this.setState({ error });
    // eslint-disable-next-line
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    // eslint-disable-next-line
    Sentry.captureException(error);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      // render fallback UI
      return <h1>Something went wrong!</h1>;
    }
    // when there's not an error, render children untouched
    return children;
  }
}

export default ErrorBoundary;
