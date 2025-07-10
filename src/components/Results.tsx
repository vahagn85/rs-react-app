import { Component } from 'react';
import CardList from './CardList';
import type { Result } from '../types/result.types';

interface ResultsProps {
  results: Result[];
}

export default class Results extends Component<ResultsProps> {
  render() {
    return (
      <main className="w-full max-w-xl flex items-center justify-center p-4 min-h-40 mt-4 bg-white rounded-lg shadow-md">
        {this.props.results && this.props.results.length > 0 ? (
          <CardList results={this.props.results} />
        ) : (
          <p>No results found</p>
        )}
      </main>
    );
  }
}
