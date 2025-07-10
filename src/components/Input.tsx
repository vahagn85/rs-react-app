import { Component } from 'react';

interface InputProps {
  value: string;
  onSearch?: (search: string) => void;
}

export default class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type="text"
        placeholder="Search..."
        className="flex-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={this.props.value}
        onChange={(e) => this.props.onSearch?.(e.target.value)}
      />
    );
  }
}
