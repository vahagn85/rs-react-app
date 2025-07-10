import { Component } from 'react';
import Button from './Button';
import Input from './Input';

interface HeaderProps {
  search: string;
  onSearch?: (search: string) => void;
  onClick?: () => void;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <Input value={this.props.search} onSearch={this.props.onSearch} />
        <Button name="Search" onClick={this.props.onClick} />
      </div>
    );
  }
}
