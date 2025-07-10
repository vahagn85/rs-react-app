import { Component } from 'react';
import Card from './Card';
import type { Result } from '../types/result.types';

interface CardListProps {
  results: Result[];
}

export default class CardList extends Component<CardListProps> {
  render() {
    return (
      <ul className="w-full">
        <Card head name="Name-(Planet)" desc="Description-(Climate)" />
        {this.props.results.map((result) => (
          <Card key={result.name} name={result.name} desc={result.climate} />
        ))}
      </ul>
    );
  }
}
