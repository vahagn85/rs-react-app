import { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import type { ApiResponse, Result } from './types/result.types';
import { apiService } from './services/api.service';

interface AppState {
  search: string;
  results: Result[];
  loading: boolean;
  error: string | null;
}

class App extends Component<object, AppState> {
  state: AppState = {
    search: '',
    results: [],
    loading: false,
    error: null,
  };

  handleSearch = (search: string) => {
    this.setState({ search });
  };

  fetchData = async () => {
    const { search } = this.state;

    localStorage.setItem('search-swapi', search.trim());
    this.setState({ loading: true, error: null });

    try {
      const data = await apiService.getData<ApiResponse>('/planets', {
        search,
      });
      this.setState({ results: data.results || [] });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({
        error: error instanceof Error ? error.message : 'Request failed',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount(): void {
    const savedSearch = localStorage.getItem('search-swapi') || '';
    this.setState({ search: savedSearch }, this.fetchData);
  }

  render() {
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
      </div>
    );
  }
}

export default App;
