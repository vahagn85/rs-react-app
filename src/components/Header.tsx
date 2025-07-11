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
      <section className="w-full max-w-xl flex flex-wrap items-center justify-center p-4 gap-4 bg-white  rounded-lg shadow-md">
        <Input value={this.props.search} onSearch={this.props.onSearch} />
        <Button name="Search" onClick={this.props.onClick} />
      </section>
    );
  }
}
