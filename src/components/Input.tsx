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
        value={this.props.value}
        onChange={(e) => this.props.onSearch?.(e.target.value)}
      />
    );
  }
}
