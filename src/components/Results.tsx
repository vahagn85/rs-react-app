import { Component } from 'react';
import CardList from './CardList';
import type { Result } from '../types/result.types';

interface ResultsProps {
  results: Result[];
}

export default class Results extends Component<ResultsProps> {
  render() {
    return (
      <main>
        {this.props.results && this.props.results.length > 0 ? (
          <CardList results={this.props.results} />
        ) : (
          <p>No results found</p>
        )}
      </main>
    );
  }
}
