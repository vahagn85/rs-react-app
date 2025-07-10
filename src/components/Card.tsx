import { Component } from 'react';
import type { Result } from '../types/result.types';

export default class Card extends Component<Pick<Result, 'name' | 'desc'>> {
  render() {
    return (
      <li className="flex gap-2 border border-gray-100 bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <div className="font-bold flex-1/3 border-r border-black">
          {this.props.name}
        </div>
        <div className="flex-2/3">{this.props.desc}</div>
      </li>
    );
  }
}
