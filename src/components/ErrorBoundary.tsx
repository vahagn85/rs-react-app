import { type ReactNode, Component, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback: (resetError: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info);
  }
  resetError = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.resetError);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
