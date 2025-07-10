import { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import type { Result } from './types/result.types';

interface AppState {
  search: string;
  results: Result[];
  loading: boolean;
}

class App extends Component<object, AppState> {
  state: AppState = {
    search: '',
    results: [],
    loading: false,
  };

  handleSearch = (search: string) => {
    this.setState({ search });
  };

  fetchData = () => {
    const newResult = {
      id: Date.now(),
      name: this.state.search,
      desc: 'Description 1',
    };
    this.setState((prevState) => ({
      results: [...prevState.results, newResult],
    }));
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Header
          search={this.state.search}
          onSearch={this.handleSearch}
          onClick={this.fetchData}
        />
        <Results results={this.state.results} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
