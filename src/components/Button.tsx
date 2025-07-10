import { Component } from 'react';

interface ButtonProps {
  name: string;
  variant?: 'primary' | 'danger';
  onClick?: () => void;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    variant: 'primary',
  };

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={`text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm ${this.props.variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'} cursor-pointer focus:outline-none`}
      >
        {this.props.name}
      </button>
    );
  }
}
