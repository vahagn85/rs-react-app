import { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500" />
      </div>
    );
  }
}
