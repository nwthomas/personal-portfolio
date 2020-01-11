import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    const { Sentry } = window;
    this.setState({ error });
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
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
