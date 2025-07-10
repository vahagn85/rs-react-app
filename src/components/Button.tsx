import { Component } from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export default class Button extends Component<ButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
