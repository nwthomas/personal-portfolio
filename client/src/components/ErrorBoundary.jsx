import React, { Component } from 'react';

type Props = {
  children: Object
};

type State = {
  error: Error | null
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: Object) {
    this.setState({ error });
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return <h1>Something went wrong!</h1>;
    } else {
      // when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
