import { Component } from 'react';
import CardList from './CardList';
import type { Result } from '../types/result.types';
import Loading from './Loading';

interface ResultsProps {
  results: Result[];
  loading?: boolean;
}

export default class Results extends Component<ResultsProps> {
  renderContent() {
    const { loading, results } = this.props;

    if (loading) return <Loading />;
    if (results.length === 0) {
      return <p className="text-gray-500">No results found</p>;
    }
    return <CardList results={results} />;
  }
  render() {
    return (
      <main className="w-full max-w-xl flex items-center justify-center p-4 min-h-40 mt-4 bg-white rounded-lg shadow-md">
        {this.renderContent()}
      </main>
    );
  }
}
