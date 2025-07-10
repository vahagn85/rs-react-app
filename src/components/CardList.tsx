import { Component } from 'react';
import Card from './Card';
import type { Result } from '../types/result.types';

interface CardListProps {
  results: Result[];
}

export default class CardList extends Component<CardListProps> {
  render() {
    return (
      <ul>
        {this.props.results.map((result) => (
          <Card key={result.id} name={result.name} desc={result.desc} />
        ))}
      </ul>
    );
  }
}
