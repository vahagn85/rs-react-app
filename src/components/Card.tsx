import { Component } from 'react';
import type { Result } from '../types/result.types';

export default class Card extends Component<Pick<Result, 'name' | 'desc'>> {
  render() {
    return (
      <li>
        <div>{this.props.name}</div>
        <div>{this.props.desc}</div>
      </li>
    );
  }
}
