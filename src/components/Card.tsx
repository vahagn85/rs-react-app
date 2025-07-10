import { Component } from 'react';

interface CardProps {
  name: string;
  desc?: string;
  head?: boolean;
}

export default class Card extends Component<CardProps> {
  render() {
    const { head, name, desc } = this.props;
    return (
      <li
        className={`flex gap-2 border  bg-gray-100 p-4 rounded-lg shadow-md mb-4 ${head ? 'bg-gray-300' : 'border-gray-100'}`}
      >
        <div className="font-bold flex-1/3 border-r border-black">{name}</div>
        <div className={`flex-2/3 ${head ? 'font-bold' : ''}`}>
          {desc && desc !== 'unknown' ? desc : '-'}
        </div>
      </li>
    );
  }
}
