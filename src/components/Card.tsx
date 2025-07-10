import { Component } from 'react';

interface CardProps {
  name: string;
  desc?: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <li className="flex gap-2 border border-gray-100 bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <div className="font-bold flex-1/3 border-r border-black">
          {this.props.name}
        </div>
        <div className="flex-2/3">{this.props.desc || '-'}</div>
      </li>
    );
  }
}
