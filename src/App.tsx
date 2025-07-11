import { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import type { ApiResponse, Result } from './types/result.types';
import { apiService } from './services/api.service';
import Button from './components/Button';

interface AppState {
  search: string;
  results: Result[];
  loading: boolean;
  error: string | null;
  throwError: boolean;
}

class App extends Component<object, AppState> {
  state: AppState = {
    search: '',
    results: [],
    loading: false,
    error: null,
    throwError: false,
  };

  handleSearch = (search: string) => {
    this.setState({ search });
  };

  fetchData = async () => {
    const { search } = this.state;

    if (search.trim()) {
      localStorage.setItem('search-swapi', search.trim());
    }
    this.setState({ loading: true, error: null });

    try {
      const data = await apiService.getData<ApiResponse>('/planets', {
        search,
      });
      this.setState({ results: data.results || [] });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : 'Request failed',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleError = () => {
    this.setState({ throwError: true });
  };

  componentDidMount(): void {
    const savedSearch = localStorage.getItem('search-swapi') || '';
    this.setState({ search: savedSearch }, this.fetchData);
  }

  render() {
    if (this.state.throwError) {
      throw new Error('Crash in render');
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Header
          search={this.state.search}
          onSearch={this.handleSearch}
          onClick={this.fetchData}
        />
        <Results
          results={this.state.results}
          loading={this.state.loading}
          error={this.state.error}
        />
        <Button
          variant="danger"
          name="Throw Error"
          onClick={this.handleError}
        />
      </div>
    );
  }
}

export default App;
